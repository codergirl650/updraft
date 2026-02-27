// STEM Spark - JavaScript for Interactivity

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });

    // Close menu when clicking a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }

  // Modal Functionality
  const privacyLink = document.getElementById('privacy-link');
  const termsLink = document.getElementById('terms-link');
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');
  const closeButtons = document.querySelectorAll('.close');

  if (privacyLink && privacyModal) {
    privacyLink.addEventListener('click', function(e) {
      e.preventDefault();
      privacyModal.classList.add('show');
    });
  }

  if (termsLink && termsModal) {
    termsLink.addEventListener('click', function(e) {
      e.preventDefault();
      termsModal.classList.add('show');
    });
  }

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal) {
        modal.classList.remove('show');
      }
    });
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.classList.remove('show');
    }
  });

  // Form Submission Handling (placeholder - replace with actual backend)
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your submission! We will get back to you soon.');
      form.reset();
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#0' && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  const animatedElements = document.querySelectorAll('.week-card, .highlight-card, .value, .team-member, .project-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.style.boxShadow = 'none';
    } else {
      header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.3)';
    }

    lastScroll = currentScroll;
  });
});
