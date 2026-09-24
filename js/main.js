// Colegio Alba — interacción de la landing
(function () {
  document.documentElement.classList.add('js');

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('[data-header]');
    var nav = document.querySelector('[data-nav]');
    var toggle = document.querySelector('[data-menu-toggle]');

    // Menú móvil
    function setMenu(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }

    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Borde de la cabecera al hacer scroll
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Animación de entrada
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }

    // "Pedir información" en una etapa preselecciona la etapa en el formulario
    var etapaSelect = document.getElementById('etapa');
    document.querySelectorAll('[data-stage]').forEach(function (link) {
      link.addEventListener('click', function () {
        etapaSelect.value = link.getAttribute('data-stage');
      });
    });

    // Validación del formulario
    var form = document.querySelector('[data-form]');
    var success = form.querySelector('[data-success]');

    var rules = {
      nombre: function (v) { return v.trim().length >= 3 || 'Escribe tu nombre y apellidos.'; },
      telefono: function (v) { return /^[0-9 +]{9,15}$/.test(v.trim()) || 'Introduce un teléfono válido (mínimo 9 dígitos).'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Introduce un correo electrónico válido.'; },
      etapa: function (v) { return v !== '' || 'Selecciona la etapa que te interesa.'; },
      privacidad: function (_, el) { return el.checked || 'Debes aceptar la política de privacidad.'; }
    };

    function validateField(name) {
      var el = form.elements[name];
      var result = rules[name](el.value, el);
      var error = document.getElementById(name + '-error');
      var ok = result === true;
      el.setAttribute('aria-invalid', String(!ok));
      if (ok) {
        el.removeAttribute('aria-describedby');
        error.textContent = '';
      } else {
        el.setAttribute('aria-describedby', name + '-error');
        error.textContent = result;
      }
      return ok;
    }

    Object.keys(rules).forEach(function (name) {
      var el = form.elements[name];
      var evt = el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'blur';
      el.addEventListener(evt, function () {
        if (el.hasAttribute('aria-invalid') || evt === 'change') validateField(name);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var firstInvalid = null;
      Object.keys(rules).forEach(function (name) {
        if (!validateField(name) && !firstInvalid) firstInvalid = form.elements[name];
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      // Aquí se conectaría el envío real (CRM, endpoint, etc.)
      form.reset();
      Object.keys(rules).forEach(function (name) {
        form.elements[name].removeAttribute('aria-invalid');
      });
      success.hidden = false;
    });

    // Año actual en el pie
    var year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  });
})();
