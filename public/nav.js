// Menu mobile simples — sem dependências, poucos bytes.
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
    var expanded = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });
});

// Carrossel de fotos do módulo — setas avançam um "slide"; o scroll nativo
// (toque/arrasto) continua a funcionar sozinho, sem depender do JS.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.module-gallery').forEach(function (gallery) {
    var track = gallery.querySelector('.module-gallery-track');
    var prev = gallery.querySelector('[data-gallery-prev]');
    var next = gallery.querySelector('[data-gallery-next]');
    if (!track || !prev || !next) return;
    function slideWidth() {
      var first = track.querySelector('img');
      return first ? first.getBoundingClientRect().width + 10 : track.clientWidth;
    }
    prev.addEventListener('click', function () { track.scrollBy({ left: -slideWidth(), behavior: 'smooth' }); });
    next.addEventListener('click', function () { track.scrollBy({ left: slideWidth(), behavior: 'smooth' }); });
  });
});

// Formulário de contacto segmentado por tipo de visitante — mostra só o
// conjunto de campos do tipo escolhido e desativa os restantes (para não
// serem enviados junto). Também mostra a mensagem de sucesso após o envio.
document.addEventListener('DOMContentLoaded', function () {
  var radios = document.querySelectorAll('input[name="visitor_type"]');
  if (radios.length) {
    var update = function () {
      radios.forEach(function (r) {
        var fs = document.querySelector('.contact-fieldset[data-type="' + r.value + '"]');
        if (!fs) return;
        if (r.checked) {
          fs.classList.add('is-active');
          fs.querySelectorAll('input, select, textarea').forEach(function (el) { el.disabled = false; });
        } else {
          fs.classList.remove('is-active');
          fs.querySelectorAll('input, select, textarea').forEach(function (el) { el.disabled = true; });
        }
      });
    };
    radios.forEach(function (r) { r.addEventListener('change', update); });
    update();
  }

  if (window.location.search.indexOf('sent=1') !== -1) {
    var success = document.getElementById('contact-success');
    if (success) {
      success.style.display = 'block';
      success.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
