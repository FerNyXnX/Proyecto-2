// Animación de entrada para features y team
const revealIndex = document.querySelectorAll('.features__card, .team__profile');

const observerIndex = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observerIndex.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealIndex.forEach(el => observerIndex.observe(el));

// Hover tilt en equipo
document.querySelectorAll('.team__profile').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height/2) / rect.height/2) * 6;
    const rotateY = ((x - rect.width/2) / rect.width/2) * -6;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });
});