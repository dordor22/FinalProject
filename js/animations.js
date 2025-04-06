// Scroll Animation Handler
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-fade, .scroll-slide-right, .scroll-slide-left, .stagger-list');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('visible');
        }
    });
}

// Text Reveal Animation
function initTextReveal() {
    const textElements = document.querySelectorAll('.text-reveal');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${index * 0.05}s`;
            element.appendChild(span);
        });
    });
}

// Initialize Animations
document.addEventListener('DOMContentLoaded', () => {
    initTextReveal();
    handleScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
    });
});

// Add hover animations to cards
const cards = document.querySelectorAll('.destination-card');
cards.forEach(card => {
    card.classList.add('card-hover', 'hover-lift');
});

// Add hover effects to images
const images = document.querySelectorAll('.destination-image');
images.forEach(image => {
    image.classList.add('img-hover');
});

// Add pulse effect to primary buttons
const primaryButtons = document.querySelectorAll('.btn-primary');
primaryButtons.forEach(button => {
    button.classList.add('btn-pulse');
});

// Add stagger animation to navigation menu
const navMenu = document.querySelector('.nav-menu');
if (navMenu) {
    navMenu.classList.add('stagger-list');
}

// Add bounce animation to social icons
const socialIcons = document.querySelectorAll('.social-icons a');
socialIcons.forEach(icon => {
    icon.classList.add('bounce');
});

// Add fade-in animation to section headers
const sectionHeaders = document.querySelectorAll('.section-header');
sectionHeaders.forEach(header => {
    header.classList.add('scroll-fade');
});

// Add slide animations to features
const features = document.querySelectorAll('.feature-card');
features.forEach((feature, index) => {
    if (index % 2 === 0) {
        feature.classList.add('scroll-slide-right');
    } else {
        feature.classList.add('scroll-slide-left');
    }
});

// Add parallax effect to hero section
function parallaxEffect() {
    const hero = document.querySelector('#hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    }
}

// Smooth reveal for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.15,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('section-revealed');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
}

// Add floating effect to cards
function addFloatingEffect() {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Add smooth scroll for navigation
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize all modern effects
document.addEventListener('DOMContentLoaded', () => {
    // Previous initialization code...
    initTextReveal();
    handleScrollAnimations();
    
    // New modern effects
    parallaxEffect();
    revealSections();
    addFloatingEffect();
    smoothScroll();
    
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
    });
});

// Add CSS classes for new animations
document.addEventListener('DOMContentLoaded', () => {
    // Add glass effect to header
    const header = document.querySelector('#main-header');
    if (header) header.classList.add('glass-effect');
    
    // Add modern hover effects to all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.add('modern-hover');
    });
    
    // Add fade-up effect to all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-up');
    });
}); 