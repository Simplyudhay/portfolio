// Enhanced Military Portfolio JavaScript with Advanced Animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initPreloader();
    initNavigation();
    initFloatingElements();
    initTacticalGrid();
    initScrollAnimations();
    initSkillBars();
    initSmoothScrolling();
    initProjectCards();
    initPublicationCards();
    initParallaxEffects();
    
    // Enhanced features
    initRadarSweep();
    initTacticalElements();
    initContactAnimations();
});

// Enhanced Preloader with Defense Messages
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const loadingText = document.getElementById('loadingText');
    const progress = document.getElementById('progress');
    
    const defenseMessages = [
        'Initializing Defense Protocols...',
        'Establishing Secure Connection...',
        'Loading Tactical Systems...',
        'Verifying Security Clearance...',
        'Accessing Defense Networks...',
        'Deploying Intelligence Assets...',
        'Activating Surveillance Grid...',
        'Defense Systems Online - Standing By...'
    ];
    
    let currentMessage = 0;
    let currentProgress = 0;
    
    // Simulate realistic loading progression
    const loadingStages = [
        { progress: 15, duration: 600 },
        { progress: 35, duration: 800 },
        { progress: 55, duration: 700 },
        { progress: 75, duration: 600 },
        { progress: 90, duration: 500 },
        { progress: 100, duration: 400 }
    ];
    
    let stageIndex = 0;
    
    function updateProgress() {
        if (stageIndex < loadingStages.length) {
            const stage = loadingStages[stageIndex];
            const startProgress = currentProgress;
            const targetProgress = stage.progress;
            const duration = stage.duration;
            const startTime = Date.now();
            
            // Update message
            if (currentMessage < defenseMessages.length - 1) {
                loadingText.textContent = defenseMessages[currentMessage];
                currentMessage++;
            }
            
            function animateProgress() {
                const elapsed = Date.now() - startTime;
                const progressRatio = Math.min(elapsed / duration, 1);
                
                currentProgress = startProgress + (targetProgress - startProgress) * progressRatio;
                progress.style.width = currentProgress + '%';
                
                if (progressRatio < 1) {
                    requestAnimationFrame(animateProgress);
                } else {
                    stageIndex++;
                    if (stageIndex < loadingStages.length) {
                        setTimeout(updateProgress, 200);
                    } else {
                        completeLoading();
                    }
                }
            }
            
            animateProgress();
        }
    }
    
    function completeLoading() {
        loadingText.textContent = defenseMessages[defenseMessages.length - 1];
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.add('loaded');
            initHeroAnimations();
        }, 1000);
    }
    
    // Start loading sequence
    setTimeout(updateProgress, 300);
}

// Enhanced Navigation with Tactical Indicators
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Enhanced scroll effect for header
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', throttle(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(248, 246, 240, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(44, 44, 44, 0.15)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = 'rgba(248, 246, 240, 0.95)';
            header.style.boxShadow = 'none';
            header.style.backdropFilter = 'blur(15px)';
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
        updateActiveNav();
    }, 100));
}

// Update active navigation link
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Floating Military Elements Animation
function initFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    
    elements.forEach((element, index) => {
        // Random positioning
        const randomTop = Math.random() * 80 + 10; // 10% to 90%
        const randomLeft = Math.random() * 80 + 10; // 10% to 90%
        
        element.style.top = randomTop + '%';
        element.style.left = randomLeft + '%';
        
        // Add random rotation animation
        const randomRotation = Math.random() * 360;
        element.style.setProperty('--rotation', randomRotation + 'deg');
        
        // Stagger animation delays
        element.style.animationDelay = (index * 1.5) + 's';
        
        // Add hover interaction
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.2) rotate(' + (randomRotation + 45) + 'deg)';
            element.style.opacity = '0.3';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1) rotate(' + randomRotation + 'deg)';
            element.style.opacity = '0.1';
        });
    });
}

// Enhanced Tactical Grid Animation
function initTacticalGrid() {
    const tacticalItems = document.querySelectorAll('.tactical-item');
    const gridScanner = document.querySelector('.grid-scanner');
    
    if (!tacticalItems.length) return;
    
    let currentActive = 0;
    
    function cycleTacticalItems() {
        // Remove active class from all items
        tacticalItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to current item
        tacticalItems[currentActive].classList.add('active');
        
        // Move to next item
        currentActive = (currentActive + 1) % tacticalItems.length;
    }
    
    // Initial activation
    cycleTacticalItems();
    
    // Cycle through items every 2.5 seconds
    setInterval(cycleTacticalItems, 2500);
    
    // Add click interaction
    tacticalItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            tacticalItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            currentActive = index;
            
            // Show notification based on item type
            const itemType = item.getAttribute('data-type');
            showTacticalNotification(`${itemType.toUpperCase()} Systems Activated`, 'success');
        });
        
        // Enhanced hover effects
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                item.style.borderColor = 'var(--military-gold)';
                item.style.boxShadow = '0 0 15px rgba(184, 134, 11, 0.3)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                item.style.borderColor = 'rgba(125, 132, 113, 0.5)';
                item.style.boxShadow = 'none';
            }
        });
    });
}

// Radar Sweep Animation
function initRadarSweep() {
    const radarSweep = document.querySelector('.radar-sweep');
    
    if (!radarSweep) return;
    
    // Add radar blips
    for (let i = 0; i < 3; i++) {
        const blip = document.createElement('div');
        blip.className = 'radar-blip';
        blip.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: var(--military-gold);
            border-radius: 50%;
            top: ${20 + Math.random() * 60}%;
            left: ${20 + Math.random() * 60}%;
            animation: radar-blip 4s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        radarSweep.appendChild(blip);
    }
}

// Hero Section Animations
function initHeroAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const statusIndicator = document.querySelector('.status-indicator');
    
    // Staggered entrance animations
    const elements = [heroTitle, heroSubtitle, heroDescription, statusIndicator, heroButtons];
    
    elements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 200 + (index * 150));
        }
    });
}

// Enhanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special animations for different sections
                if (entry.target.classList.contains('skills')) {
                    setTimeout(animateSkillBars, 300);
                }
                
                if (entry.target.classList.contains('about-stats')) {
                    animateStatCards();
                }
                
                if (entry.target.classList.contains('projects-grid')) {
                    animateProjectCards();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToAnimate = document.querySelectorAll(`
        .about, .projects, .publications, .skills, .contact,
        .project-card, .publication-card, .stat-card, .about-stats
    `);
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Enhanced Skill Bar Animations
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        bar.setAttribute('data-target-width', width);
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-target-width');
        
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
            
            // Add pulse effect when animation completes
            setTimeout(() => {
                bar.classList.add('skill-complete');
            }, 1500);
        }, index * 100);
    });
}

// Animate stat cards
function animateStatCards() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        const number = card.querySelector('.stat-number');
        const targetNumber = parseInt(number.textContent);
        
        setTimeout(() => {
            animateNumber(number, 0, targetNumber, 2000);
        }, index * 150);
    });
}

// Number animation
function animateNumber(element, start, end, duration) {
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * easeOutCubic(progress));
        element.textContent = current + (element.textContent.includes('+') ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    update();
}

// Easing function
function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Project Cards Animation
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        }, index * 150);
    });
}

// Enhanced Project Cards Interaction
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const links = card.querySelectorAll('.project-link');
        
        // Enhanced hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
            
            // Animate project links
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'translateY(-2px)';
                    link.style.boxShadow = '0 4px 12px rgba(125, 132, 113, 0.2)';
                }, index * 100);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            
            links.forEach(link => {
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = 'none';
            });
        });
        
        // Add click ripple effect
        card.addEventListener('click', createRippleEffect);
    });
}

// Publication Cards Interaction
function initPublicationCards() {
    const publicationCards = document.querySelectorAll('.publication-card');
    
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const badge = card.querySelector('.publication-badge');
            if (badge) {
                badge.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const badge = card.querySelector('.publication-badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
    });
}

// Contact Animations
function initContactAnimations() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Parallax for floating elements
        floatingElements.forEach((element, index) => {
            const speed = 0.2 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    }, 16));
}

// Smooth Scrolling
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Add navigation feedback
                showTacticalNotification(`Navigating to ${targetId.substring(1).toUpperCase()}`, 'info');
            }
        });
    });
}

// Ripple Effect
function createRippleEffect(e) {
    const card = e.currentTarget;
    const ripple = document.createElement('div');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(125, 132, 113, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        left: ${x - 10}px;
        top: ${y - 10}px;
        width: 20px;
        height: 20px;
        pointer-events: none;
    `;
    
    card.style.position = 'relative';
    card.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Enhanced Notification System
function showTacticalNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `tactical-notification tactical-notification--${type}`;
    
    const icons = {
        success: '<i class="fas fa-check-circle"></i>',
        error: '<i class="fas fa-exclamation-triangle"></i>',
        info: '<i class="fas fa-info-circle"></i>',
        warning: '<i class="fas fa-exclamation-circle"></i>'
    };
    
    notification.innerHTML = `
        ${icons[type]}
        <span>${message}</span>
        <div class="notification-progress"></div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--military-olive);
        color: var(--military-white);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 25px rgba(44, 44, 44, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 600;
        font-size: 0.9rem;
        min-width: 280px;
        border-left: 4px solid var(--military-gold);
    `;
    
    const progress = notification.querySelector('.notification-progress');
    progress.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: var(--military-gold);
        width: 100%;
        animation: notification-progress 3s linear;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 3000);
}

// Throttle function for performance
function throttle(func, wait) {
    let waiting = false;
    return function(...args) {
        if (!waiting) {
            func.apply(this, args);
            waiting = true;
            setTimeout(() => {
                waiting = false;
            }, wait);
        }
    };
}

// Konami Code Easter Egg
function initKonamiCode() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let userInput = [];
    
    document.addEventListener('keydown', (e) => {
        userInput.push(e.keyCode);
        
        if (userInput.length > konamiCode.length) {
            userInput.shift();
        }
        
        if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
            showTacticalNotification('🎖️ CLASSIFIED ACCESS GRANTED! Defense Protocol Omega Activated!', 'success');
            
            // Special tactical effect
            document.body.style.filter = 'hue-rotate(45deg) contrast(1.2)';
            
            // Add special floating elements
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createSpecialEffect();
                }, i * 200);
            }
            
            setTimeout(() => {
                document.body.style.filter = 'none';
            }, 5000);
        }
    });
}

function createSpecialEffect() {
    const effect = document.createElement('div');
    effect.innerHTML = '★';
    effect.style.cssText = `
        position: fixed;
        color: var(--military-gold);
        font-size: 2rem;
        z-index: 9999;
        pointer-events: none;
        top: ${Math.random() * window.innerHeight}px;
        left: ${Math.random() * window.innerWidth}px;
        animation: special-float 3s ease-out forwards;
    `;
    
    document.body.appendChild(effect);
    
    setTimeout(() => {
        if (document.body.contains(effect)) {
            document.body.removeChild(effect);
        }
    }, 3000);
}

// Initialize Konami Code
initKonamiCode();

// Page Load Complete
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
    
    // Initialize any remaining animations
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in:not(.visible)');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 1000);
});

// Add required CSS animations
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .tactical-notification {
        font-family: var(--font-family-base);
    }
    
    .tactical-notification i {
        font-size: 1.1rem;
    }
    
    @keyframes notification-progress {
        from { width: 100%; }
        to { width: 0%; }
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(8);
            opacity: 0;
        }
    }
    
    @keyframes special-float {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-200px) rotate(360deg) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes radar-blip {
        0%, 90% { opacity: 0; transform: scale(0.5); }
        5%, 15% { opacity: 1; transform: scale(1); }
        20%, 85% { opacity: 0.3; transform: scale(0.8); }
    }
    
    .skill-complete {
        animation: skill-complete-pulse 0.5s ease-out;
    }
    
    @keyframes skill-complete-pulse {
        0% { transform: scaleY(1); }
        50% { transform: scaleY(1.1); }
        100% { transform: scaleY(1); }
    }
    
    .page-loaded .hero-content {
        animation: hero-entrance 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    @keyframes hero-entrance {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(additionalStyles);