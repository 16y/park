// park-theme — Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');

  if (menuToggle && navbar) {
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('open');
      menuToggle.classList.toggle('active');
    });

    // Close menu on link click
    navbar.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        navbar.classList.remove('open');
        menuToggle.classList.remove('active');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove('open');
        menuToggle.classList.remove('active');
      }
    });
  }

  // Navbar scroll effect
  const header = document.querySelector('.header');
  let lastScroll = 0  ;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.background = 'rgba(15, 15, 26, 0.95)';
    } else {
      header.style.background = 'rgba(15, 15, 26, 0.9)';
    }
    lastScroll = currentScroll;
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
