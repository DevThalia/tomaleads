// Colegio Alba · interacción de la landing
(function () {
  document.documentElement.classList.add('js');

  // Año en que empieza el curso 2027–2028
  var INICIO_CURSO = 2027;

  var ETAPAS = {
    Infantil: { chip: 'chip-sun', edades: '1 – 6 años' },
    Primaria: { chip: 'chip-sky', edades: '6 – 12 años' },
    ESO: { chip: 'chip-clay', edades: '12 – 16 años' },
    Bachillerato: { chip: 'chip-sage', edades: '16 – 18 años' }
  };

  // Curso que corresponde a un año de nacimiento (en España se asigna por año natural)
  function cursoPara(anio) {
    var edad = INICIO_CURSO - anio;
    if (edad <= 2) return { edad: edad, etapa: 'Infantil', curso: edad === 1 ? 'Aula de 1 año' : 'Aula de 2 años' };
    if (edad <= 5) return { edad: edad, etapa: 'Infantil', curso: (edad - 2) + 'º de Infantil' };
    if (edad <= 11) return { edad: edad, etapa: 'Primaria', curso: (edad - 5) + 'º de Primaria' };
    if (edad <= 15) return { edad: edad, etapa: 'ESO', curso: (edad - 11) + 'º de ESO' };
    return { edad: edad, etapa: 'Bachillerato', curso: (edad - 15) + 'º de Bachillerato' };
  }

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('[data-header]');
    var nav = document.querySelector('[data-nav]');
    var toggle = document.querySelector('[data-menu-toggle]');
    var form = document.querySelector('[data-form]');
    var etapaSelect = document.getElementById('etapa');
    var mensaje = document.getElementById('mensaje');

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

    // Animación de entrada de las secciones
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

    // "Pedir información" en una etapa la deja elegida en el formulario
    document.querySelectorAll('[data-stage]').forEach(function (link) {
      link.addEventListener('click', function () {
        etapaSelect.value = link.getAttribute('data-stage');
      });
    });

    // Calculadora de curso
    var finder = document.querySelector('[data-finder]');
    if (finder) {
      var range = finder.querySelector('#birth-year');
      var output = finder.querySelector('#year-output');
      var result = finder.querySelector('.finder-result');
      var ui = {
        curso: finder.querySelector('[data-course]'),
        chip: finder.querySelector('[data-chip]'),
        edad: finder.querySelector('[data-age]'),
        punto: finder.querySelector('[data-dot]'),
        restantes: finder.querySelector('[data-remaining]'),
        cta: finder.querySelector('[data-finder-cta]'),
        ctaTexto: finder.querySelector('[data-cta-label]')
      };
      var actual;

      function pintar(animar) {
        var anio = Number(range.value);
        var etapa;
        actual = cursoPara(anio);
        etapa = ETAPAS[actual.etapa];

        output.textContent = anio;
        ui.curso.textContent = actual.curso;
        ui.chip.className = 'chip ' + etapa.chip;
        ui.chip.textContent = actual.etapa + ' · ' + etapa.edades;
        ui.edad.textContent = 'Cumple ' + actual.edad + (actual.edad === 1 ? ' año' : ' años') + ' en ' + INICIO_CURSO;
        ui.punto.style.left = ((actual.edad - 0.5) / 17 * 100) + '%';

        var cursosRestantes = 18 - actual.edad;
        ui.restantes.textContent = cursosRestantes === 1
          ? 'Es su último curso antes de la universidad.'
          : 'Le quedan ' + cursosRestantes + ' cursos con nosotros hasta la universidad.';
        ui.ctaTexto.textContent = 'Reservar visita para ' + actual.etapa;
        range.setAttribute('aria-valuetext', anio + ', ' + actual.curso);

        if (animar) {
          result.classList.remove('is-updating');
          void result.offsetWidth;
          result.classList.add('is-updating');
        }
      }

      range.addEventListener('input', function () { pintar(true); });

      finder.querySelectorAll('[data-step]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var siguiente = Number(range.value) + Number(btn.getAttribute('data-step'));
          range.value = Math.min(Number(range.max), Math.max(Number(range.min), siguiente));
          pintar(true);
        });
      });

      // Lleva el resultado al formulario de contacto
      ui.cta.addEventListener('click', function () {
        etapaSelect.value = actual.etapa;
        mensaje.value = 'Me interesa ' + actual.curso + ' para el curso 2027–2028 (año de nacimiento: ' + range.value + ').';
      });

      pintar(false);
    }

    // Barra de reserva en móvil: se oculta en la portada, el contacto y el pie
    var barra = document.querySelector('[data-mobile-cta]');
    if (barra && 'IntersectionObserver' in window) {
      var tapan = new Set();
      var vigilar = [document.getElementById('inicio'), document.getElementById('contacto'), document.querySelector('[data-footer]')];
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) tapan.add(entry.target);
          else tapan.delete(entry.target);
        });
        barra.classList.toggle('is-visible', tapan.size === 0);
      });
      vigilar.forEach(function (el) { if (el) obs.observe(el); });
    }

    // Validación del formulario
    var success = form.querySelector('[data-success]');

    var rules = {
      nombre: function (v) { return v.trim().length >= 3 || 'Escribe tu nombre y apellidos.'; },
      telefono: function (v) { return /^[0-9 +]{9,15}$/.test(v.trim()) || 'Escribe un teléfono válido (mínimo 9 dígitos).'; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Escribe un correo electrónico válido.'; },
      etapa: function (v) { return v !== '' || 'Elige la etapa que te interesa.'; },
      privacidad: function (_, el) { return el.checked || 'Necesitamos que aceptes la política de privacidad.'; }
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
      // Envío simulado: limpia el formulario y muestra la confirmación
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
