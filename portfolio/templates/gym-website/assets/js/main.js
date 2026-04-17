/* ============================================================
   GYM WEBSITE - MAIN.JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- PAGE LOADER ----
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1900);
  }

  // ---- NAVBAR SCROLL ----
  const navbar = document.querySelector('.navbar');
  function handleScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    // Scroll to top
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      scrollTop.classList.toggle('show', window.scrollY > 400);
    }
  }
  window.addEventListener('scroll', handleScroll);

  // ---- HAMBURGER MENU ----
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      }
    });
  }

  // ---- ACTIVE NAV LINK ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) link.classList.add('active');
  });

  // ---- SCROLL TO TOP ----
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---- REVEAL ANIMATIONS ----
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---- COUNTER ANIMATION ----
  function animateCounter(el) {
    const targetAttr = el.getAttribute('data-target');
    if (!targetAttr) return;
    const target = parseInt(targetAttr);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 16);
  }
  const counterEls = document.querySelectorAll('.badge-num, .stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counterEls.forEach(el => counterObserver.observe(el));

  // ---- BUILD YOUR BODY TABS ----
  const buildTabs = document.querySelectorAll('.build-tab');
  const buildContents = document.querySelectorAll('.build-content');
  buildTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      buildTabs.forEach(t => t.classList.remove('active'));
      buildContents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  });

  // ---- VIDEO MODAL ----
  const playBtn = document.querySelector('.play-btn');
  const videoModal = document.querySelector('.video-modal');
  const modalClose = document.querySelector('.modal-close');
  const videoFrame = document.querySelector('.video-modal iframe');
  if (playBtn && videoModal) {
    playBtn.addEventListener('click', () => {
      videoModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Set your YouTube video ID in the iframe src
      if (videoFrame) videoFrame.src = videoFrame.getAttribute('data-src');
    });
    function closeModal() {
      videoModal.classList.remove('open');
      document.body.style.overflow = '';
      if (videoFrame) videoFrame.src = '';
    }
    if (modalClose) modalClose.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  // ---- GALLERY LIGHTBOX (simple) ----
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img').src;
      const lightbox = document.createElement('div');
      lightbox.style.cssText = `
        position:fixed;inset:0;background:rgba(0,0,0,0.95);z-index:9999;
        display:flex;align-items:center;justify-content:center;cursor:pointer;
      `;
      const img = document.createElement('img');
      img.src = src;
      img.style.cssText = 'max-width:90%;max-height:90vh;object-fit:contain;';
      lightbox.appendChild(img);
      document.body.appendChild(lightbox);
      lightbox.addEventListener('click', () => document.body.removeChild(lightbox));
    });
  });

  // ---- SMOOTH ANCHOR LINKS ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- STAGGER REVEAL DELAYS ----
  document.querySelectorAll('.mvc-card, .why-card, .class-card, .price-card, .testimonial-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  // ---- CONTACT FORM SUBMIT ----
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = this.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        setTimeout(() => {
          btn.textContent = original;
          btn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }

  // ---- HERO VIDEO FALLBACK ----
  const heroVideo = document.querySelector('.hero-video');
  const heroBg = document.querySelector('.hero-bg');
  if (heroVideo && heroBg) {
    // Hide static background initially if video element exists
    heroBg.style.display = 'none';
    
    // Handle video load error
    heroVideo.addEventListener('error', () => {
      heroVideo.style.display = 'none';
      heroBg.style.display = 'block';
    });
    
    // Handle case where video source fails to load
    const videoSource = heroVideo.querySelector('source');
    if (videoSource) {
      videoSource.addEventListener('error', () => {
        heroVideo.style.display = 'none';
        heroBg.style.display = 'block';
      });
    }
    
    // Graceful degradation for browsers without video support
    if (!heroVideo.canPlayType || !heroVideo.canPlayType('video/mp4')) {
      heroVideo.style.display = 'none';
      heroBg.style.display = 'block';
    }
  }

});
