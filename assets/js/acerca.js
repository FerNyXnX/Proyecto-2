// Animación de entrada para valores y portfolio
const revealAcerca = document.querySelectorAll('.about__card, .portfolio__item, .team__profile');

const observerAcerca = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observerAcerca.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealAcerca.forEach(el => observerAcerca.observe(el));

// Pequeño efecto hover en portfolio
document.querySelectorAll('.portfolio__item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.03)';
    item.style.transition = 'transform .3s ease';
  });
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});