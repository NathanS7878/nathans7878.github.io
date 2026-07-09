# Portfolio

Personal CS portfolio site — dark editorial design, plain HTML/CSS/JS (no build step).

## Run locally

Any static server works, e.g.:

```
python -m http.server 8123
```

then open http://localhost:8123.

## Deploy

The site is three static files (`index.html`, `styles.css`, `main.js`) — drop it on
GitHub Pages, Netlify, or Vercel as-is.

For GitHub Pages: push this folder to a repo, then Settings → Pages → deploy from branch.

## Customizing

- **Projects** — each project is one `<article class="case">` block in `index.html`.
  Copy a block to add a fourth project; the numbering ("01", "02"…) is manual.
- **Thumbnails** — currently animated SVG vignettes. To use a real screenshot instead,
  replace the `<svg>` inside `.case-thumb` with `<img src="..." alt="...">`
  (target ~420×260, `object-fit: cover`).
- **Links** — LinkedIn URL in the footer is still a `#` placeholder.
- **Colors/typography** — all design tokens are CSS variables at the top of `styles.css`.
