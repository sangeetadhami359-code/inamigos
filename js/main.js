// Main Global JavaScript

function initAll() {
  initSplashScreen();
  initTheme();
  initMobileNav();
  initScrollAnimations();
  initStatsCounter();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

// Theme Toggle Functionality
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';
    
    if (theme === 'light') {
      targetTheme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    updateThemeIcon(targetTheme);
    showToast(`Switched to ${targetTheme} mode`, 'success');
  });
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#themeToggle i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// Mobile Navigation Toggle
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = toggle.querySelectorAll('span');
    if (menu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
  
  // Close menu when clicking links
  const links = menu.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('active');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// Scroll Entrance Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const animObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add css dynamic rules for entry animations
  const style = document.createElement('style');
  style.innerHTML = `
    .animate-hidden {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .animate-visible {
      opacity: 1;
      transform: translateY(0);
    }
    .delay-1 { transition-delay: 0.1s; }
    .delay-2 { transition-delay: 0.2s; }
    .delay-3 { transition-delay: 0.3s; }
  `;
  document.head.appendChild(style);

  const elementsToAnimate = document.querySelectorAll('.card-cause, .card-volunteer, .card-blog, .event-card, .section-header, .about-credential-card, .footer-grid > *');
  elementsToAnimate.forEach(el => {
    el.classList.add('animate-hidden');
    animObserver.observe(el);
  });
}

// Stats Counter Animation
function initStatsCounter() {
  const statsSection = document.querySelector('.stats-section');
  const counters = document.querySelectorAll('.stat-number');
  
  if (!statsSection || counters.length === 0) return;
  
  let started = false;
  
  const observer = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !started) {
      started = true;
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const speed = target / 100; // time steps
        
        let count = 0;
        const updateCount = () => {
          count += Math.ceil(speed);
          if (count < target) {
            counter.innerText = count.toLocaleString();
            setTimeout(updateCount, 15);
          } else {
            counter.innerText = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
          }
        };
        updateCount();
      });
      observer.unobserve(statsSection);
    }
  }, { threshold: 0.5 });
  
  observer.observe(statsSection);
}

// Global Toast System
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  toast.innerHTML = `
    <i class="fas ${icon}"></i>
    <span>${message}</span>
  `;
  
  toastContainer.appendChild(toast);
  
  // Trigger animation after render
  setTimeout(() => {
    toast.classList.add('active');
  }, 10);
  
  // Auto remove
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}

// Splash Screen Controller
function initSplashScreen() {
  const splash = document.getElementById('splashScreen');
  if (!splash) return;

  const isReload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
  
  if (sessionStorage.getItem('splashPlayed') && !isReload) {
    splash.style.display = 'none';
    return;
  }

  // Lock body scroll during splash screen
  document.body.style.overflow = 'hidden';

  // Wait 2.8s and then fade out the splash screen
  setTimeout(() => {
    splash.classList.add('fade-out');
    // Restore scroll
    document.body.style.overflow = '';
    sessionStorage.setItem('splashPlayed', 'true');
    
    // Remove element from DOM after transition finishes (800ms)
    setTimeout(() => {
      splash.remove();
    }, 800);
  }, 2800);
}
