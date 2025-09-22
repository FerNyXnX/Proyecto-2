// Navegación con scroll suave
document.querySelectorAll('.nav__link[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Skip link accesible
const skipLink = document.querySelector('.u-skip-link');
if (skipLink) {
  skipLink.addEventListener('click', () => {
    const main = document.querySelector('main');
    if (main) main.setAttribute('tabindex', '-1');
    main.focus();
  });
}