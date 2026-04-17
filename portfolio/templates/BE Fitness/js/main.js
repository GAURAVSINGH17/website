// ==================== MAIN JAVASCRIPT ====================
// Components of Fitness - Gym Website

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initScheduleTabs();
    initTestimonialSlider();
    initBackToTop();
    initSmoothScroll();
    initFormSubmissions();
});

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ==================== SCHEDULE TABS ====================
function initScheduleTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const day = this.getAttribute('data-day');

            // Remove active from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            scheduleDays.forEach(d => d.classList.remove('active'));

            // Add active to clicked tab
            this.classList.add('active');
            document.getElementById(day).classList.add('active');
        });
    });
}

// ==================== TESTIMONIAL SLIDER ====================
let currentTestimonial = 0;
const testimonialInterval = 5000; // 5 seconds

function initTestimonialSlider() {
    showTestimonial(0);

    // Auto-rotate
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % 3;
        showTestimonial(currentTestimonial);
    }, testimonialInterval);
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    testimonials.forEach((t, i) => {
        t.classList.remove('active');
        dots[i].classList.remove('active');
    });

    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentTestimonial = index;
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== BMI CALCULATOR ====================
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values');
        return;
    }

    // BMI Formula: weight (kg) / (height (m))^2
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Determine category
    let category = '';
    let categoryClass = '';
    let scaleWidth = 0;
    let color = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
        scaleWidth = 25;
        color = '#3498DB';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal Weight';
        categoryClass = 'normal';
        scaleWidth = 50;
        color = '#27AE60';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
        categoryClass = 'overweight';
        scaleWidth = 75;
        color = '#F39C12';
    } else {
        category = 'Obese';
        categoryClass = 'obese';
        scaleWidth = 100;
        color = '#E74C3C';
    }

    // Display result
    const resultDiv = document.getElementById('bmiResult');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');
    const scaleFill = document.getElementById('scaleFill');

    resultDiv.style.display = 'block';
    bmiValue.textContent = bmi;
    bmiCategory.textContent = category;
    bmiCategory.style.backgroundColor = color + '20'; // 20% opacity
    bmiCategory.style.color = color;

    // Animate scale
    setTimeout(() => {
        scaleFill.style.width = scaleWidth + '%';
    }, 100);
}

// ==================== FORM SUBMISSIONS ====================
function initFormSubmissions() {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Here you would typically send to server
            console.log('Contact Form Data:', data);

            // Show success message
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = this.querySelector('input[type="email"]').value;
            console.log('Newsletter Subscription:', email);

            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
}

// ==================== ACTIVE NAV LINK ON SCROLL ====================
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .trainer-card, .pricing-card').forEach(el => {
    observer.observe(el);
});