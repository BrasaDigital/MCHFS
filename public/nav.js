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
