// Scroll-triggered reveal for case-study rows and the about section.
(function () {
  const rows = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    rows.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  rows.forEach(el => observer.observe(el));
})();

// Draw the background grid for the Snake thumbnail (20px cells, like the game).
(function () {
  const grid = document.querySelector('.thumb-snake .grid-lines');
  if (!grid) return;
  const ns = 'http://www.w3.org/2000/svg';
  let d = '';
  for (let x = 0; x <= 420; x += 20) d += `M${x} 0V260`;
  for (let y = 0; y <= 260; y += 20) d += `M0 ${y}H420`;
  const path = document.createElementNS(ns, 'path');
  path.setAttribute('d', d);
  path.setAttribute('stroke', 'oklch(0.16 0.006 60)');
  path.setAttribute('stroke-width', '1');
  path.setAttribute('fill', 'none');
  grid.appendChild(path);
})();
