# Randevu Saati Website

This folder is a standalone static website for presenting the Randevu Saati mobile app.

## Local preview

From the project root:

```bash
python3 -m http.server 4173 --directory docs-web
```

Then open:

```text
http://localhost:4173
```

## Structure

- `index.html`: single-page product website
- `styles.css`: responsive visual system
- `script.js`: mobile navigation, pricing toggle, and screenshot modal
- `ROADMAP.md`: UI/UX roadmap, asset policy, and deferred verification notes
- `assets/screens`: optimized app screenshots grouped by flow
- `assets/brand`: logo and social preview image
- `assets/video`: future setup or product demo videos

## GitHub Pages

When this is moved into a separate repository, the contents of `docs-web` can be placed at the repository root and deployed with GitHub Pages. No build step is required.
