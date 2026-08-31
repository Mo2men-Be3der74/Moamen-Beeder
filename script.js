/**
 * Portfolio JavaScript
 * - Theme initialization & Dark Mode toggle with localStorage persistence
 * - Cross-browser scroll reveal fallback
 */

// Initialize theme immediately to prevent flashing
(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Button
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-toggle-icon');

  function updateIcon() {
    if (!themeIcon) return;
    const isDark = document.documentElement.classList.contains('dark');
    themeIcon.setAttribute('icon', isDark ? 'lucide:sun' : 'lucide:moon');
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    themeToggle.setAttribute('title', isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }

  updateIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateIcon();
    });
  }

  // Scroll Entrance Observer (threshold: 0.15, once: true)
  if ('IntersectionObserver' in window) {
    const animatedElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger, .reveal-fade');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target); // once: true
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }
});

