document.addEventListener('DOMContentLoaded', () => {

    // ─── Navbar Scroll Effect ──────────────────────────────────────
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ─── Mobile Menu Toggle ────────────────────────────────────────
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks      = document.getElementById('nav-links');

    function closeMenu() {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'bx bx-menu';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('active');
            const icon   = mobileMenuBtn.querySelector('i');
            icon.className = isOpen ? 'bx bx-x' : 'bx bx-menu';
        });
    }

    // Close mobile menu when any nav link is clicked (single-page)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ─── Active Nav Link on Scroll ────────────────────────────────
    const sections  = document.querySelectorAll('section[id]');
    const navItems  = document.querySelectorAll('.nav-links a[data-section]');

    function updateActiveNav() {
        let currentSection = 'home';
        const scrollY      = window.scrollY;
        const navHeight    = navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 60;
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
    updateActiveNav(); // run once on load

    // ─── Scroll Reveal Animation ───────────────────────────────────
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold:   0.12,
        rootMargin:  '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // ─── Magnetic Button Effect ────────────────────────────────────
    document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x    = (e.clientX - rect.left - rect.width  / 2) * 0.2;
            const y    = (e.clientY - rect.top  - rect.height / 2) * 0.2;
            btn.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // ─── Portfolio Filtering ───────────────────────────────────────
    const filterBtns    = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length > 0 && portfolioCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                portfolioCards.forEach(card => {
                    const match = filter === 'all' || card.getAttribute('data-category') === filter;
                    if (match) {
                        card.style.display  = 'block';
                        setTimeout(() => {
                            card.style.opacity   = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.opacity   = '0';
                        card.style.transform = 'scale(0.85)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

});
