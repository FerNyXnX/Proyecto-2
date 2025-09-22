// ===============================
// Validación de formulario
// ===============================
const form = document.querySelector('.form');
const globalMessages = document.querySelector('#form-messages');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;
    globalMessages.textContent = ''; // limpiar mensajes globales

    const requiredFields = form.querySelectorAll('[required]');

    requiredFields.forEach(field => {
      const errorId = `error-${field.id}`;
      let errorEl = document.getElementById(errorId);

      // Crear span de error si no existe
      if (!errorEl) {
        errorEl = document.createElement('span');
        errorEl.id = errorId;
        errorEl.className = 'form__error';
        field.insertAdjacentElement('afterend', errorEl);
      }

      // Validaciones
      if (!field.value.trim()) {
        errorEl.textContent = 'Este campo es obligatorio';
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorId);
        isValid = false;
      } else if (field.type === 'email' && !field.validity.valid) {
        errorEl.textContent = 'Introduce un correo válido';
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorId);
        isValid = false;
      } else if (field.id === 'mensaje' && field.value.trim().length < 10) {
        errorEl.textContent = 'El mensaje debe tener al menos 10 caracteres';
        field.setAttribute('aria-invalid', 'true');
        field.setAttribute('aria-describedby', errorId);
        isValid = false;
      } else {
        errorEl.textContent = '';
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');
      }
    });

    // Si todo está correcto
    if (isValid) {
      globalMessages.textContent = '¡Enviado con éxito!';
      globalMessages.classList.add('form__messages--success');
      form.reset();

      // Limpiar estados tras unos segundos
      setTimeout(() => {
        globalMessages.textContent = '';
        globalMessages.classList.remove('form__messages--success');
      }, 4000);
    }
  });
}

// ==================================================
// Animación de entrada con IntersectionObserver
// ==================================================
const revealContacto = document.querySelectorAll('.contact__info');
const observerContacto = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observerContacto.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealContacto.forEach(el => observerContacto.observe(el));