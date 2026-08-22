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

// Build the KV-cache page grid for the nano-infer thumbnail. Blocks are laid
// out in rows of pages; a subset animates to suggest cache blocks filling.
(function () {
  const host = document.querySelector('.thumb-kv .kv-pages');
  if (!host) return;

  const ns = 'http://www.w3.org/2000/svg';
  const cols = 12, rows = 7, size = 22, gap = 6;
  const w = cols * size + (cols - 1) * gap;
  const h = rows * size + (rows - 1) * gap;
  const ox = (420 - w) / 2, oy = (260 - h) / 2;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const rect = document.createElementNS(ns, 'rect');
      rect.setAttribute('x', ox + c * (size + gap));
      rect.setAttribute('y', oy + r * (size + gap));
      rect.setAttribute('width', size);
      rect.setAttribute('height', size);
      rect.setAttribute('rx', '2');
      // Fill roughly the first two-thirds of each row, staggered per block.
      const filled = c < 4 + ((r * 5) % 5);
      rect.setAttribute('class', filled ? 'page on' : 'page');
      if (filled) {
        rect.style.animationDelay = `${(r * 0.16 + c * 0.09).toFixed(2)}s`;
      }
      host.appendChild(rect);
    }
  }
})();
