# Portfolio

Personal CS portfolio site — dark editorial design, plain HTML/CSS/JS (no build step).

Live at https://nathans7878.github.io

## Run locally

Any static server works, e.g.:

```
python -m http.server 8123
```

then open http://localhost:8123.

## Layout

```
index.html          landing page — hero, four project cards, about, contact
styles.css          all styles: design tokens, cards, thumbnails, detail pages
main.js             scroll reveals + the nano-infer KV-grid thumbnail
projects/           one detail page per project
  minidynamo.html
  trading-research.html
  nano-infer.html
  gravity.html
```

## Adding a project

1. Copy an `<article class="case">` block in `index.html`. The index numbers
   ("01", "02"…) are manual — renumber the rest.
2. Copy a page in `projects/` as the starting template. Every detail page keeps
   the same section order: back link → title → subtitle → tech chips → result
   line → problem → how it works → what I measured → limitations → links.
3. Card blurbs lead with the headline number, bolded. A recruiter skimming the
   landing page should absorb every project's number without clicking.
4. Only link a GitHub repo once it is **public**. A card with no public repo
   links to its detail page only — a 404 is worse than no link.

## Conventions worth keeping

- **Every page carries a limitations section.** It is deliberate: stating what a
  project doesn't do reads as more credible, not less.
- **No invented numbers.** If a benchmark doesn't exist yet, the page says so
  (see `nano-infer.html`) rather than showing a placeholder table.
- **Design tokens** are the CSS variables at the top of `styles.css`. Change
  colors and type there, not inline.
- **Thumbnails** are animated inline SVG, not images, and all motion is disabled
  under `prefers-reduced-motion`.

## Known gaps

- **No résumé PDF yet.** The instructions call for a `Résumé` link in the nav and
  footer pointing to `/Nathan-Stevens-Resume.pdf`. That file does not exist, so
  the link is intentionally omitted rather than shipped broken. Drop the PDF in
  the repo root and add the link in the nav (`index.html`) and each footer.
- **nano-infer and the trading system have no public repos.** Both cards link to
  their detail page only. Add a `GitHub ↗` link to each once the repos are pushed.
