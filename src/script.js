// JavaScript for Portfolio Website

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Update active navigation link on scroll
    function updateActiveNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttled scroll event listener
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll);
    
    // Hero section button functionality
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate API call delay
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1000);
        });
    }
    
    // Mobile menu functionality (basic implementation)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for animations
    sections.forEach(section => {
        observer.observe(section);
    });
    
    //// CV download button functionality
    //const cvButtons = document.querySelectorAll('.cv-buttons .btn');
    //cvButtons.forEach(button => {
    //    button.addEventListener('click', function(e) {
    //        e.preventDefault();
            
    //        if (this.textContent.includes('Download')) {
    //            // Simulate CV download
    //            alert('CV download would start here. Please add your actual CV file path.');
    //        } else if (this.textContent.includes('View')) {
    //            // Simulate CV view
    //            alert('CV viewer would open here. Please add your actual CV viewing functionality.');
    //        }
    //    });
    //});
    
    //// Social links functionality
    //const socialLinks = document.querySelectorAll('.social-link, .footer-social-link, .social-btn');
    //socialLinks.forEach(link => {
    //    link.addEventListener('click', function(e) {
    //        e.preventDefault();
    //        alert('Please update this link with your actual social media profile URL.');
    //    });
    //});
    
    //// Publication links functionality
    //const publicationLinks = document.querySelectorAll('.view-all-link');
    //publicationLinks.forEach(link => {
    //    link.addEventListener('click', function(e) {
    //        e.preventDefault();
    //        alert('Please update this link with your actual Google Scholar profile URL.');
    //    });
    //});
    
    // Add smooth reveal animations
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .nav-menu.active {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border-top: 1px solid var(--border-color);
        }
        
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
        }
        
        .project-image {
            overflow: hidden;
        }
        
        .project-image img {
            transition: transform 0.3s ease;
        }
        
        .project-card:hover .project-image img {
            transform: scale(1.05);
        }
        
        .publication-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .publication-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
        }
        
        .interest-card {
            transition: transform 0.2s ease;
        }
        
        .interest-card:hover {
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);
});

// Utility function for smooth scrolling
function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});