# CLAUDE.md

## Project Overview

**Familias Vegetales** is an educational website about plant morphology (flowering plants and fruits). It uses a Strapi headless CMS backend with a static HTML/Alpine.js frontend.

## Architecture

- **Backend**: Strapi 3.6.10 with SQLite, hosted on Render.com (`https://familias-vegetales-gu7l.onrender.com`)
- **Frontend**: Single-page app served from `/public/index.html`
  - **Alpine.js** for reactivity and client-side routing
  - **HTMX** for AJAX
  - **Bootstrap + Paper Kit** CSS theme
  - **Splide** for image carousels
  - **Magnific Popup** (jQuery) for lightbox
  - **Marked** for Markdown rendering
- **Language**: Spanish

## File Structure

```
public/
├── index.html                  # Main SPA shell, includes all scripts/styles
├── assets/
│   ├── css/
│   │   ├── styles.css          # Custom project styles
│   │   ├── bootstrap.min.css
│   │   ├── paper-kit.css
│   │   └── magnific-popup.css
│   └── js/
│       ├── alpine-fetch.js     # Custom $fetch magic for API calls
│       ├── alpine-route.js     # Client-side router ($router, x-route, x-link)
│       ├── alpine-component.js # <x-component-wrapper> web component
│       ├── alpine-marked.js    # x-markdown directive
│       └── core/               # jQuery, Popper, Bootstrap
├── templates/
│   ├── home.html               # Homepage
│   ├── estructura.html         # Plant family pages
│   ├── subestructura.html      # Sub-structure pages
│   ├── sub-subestructura.html  # Sub-sub-structure pages
│   ├── contenido.html          # Static content pages
│   ├── adaptacion.html         # Adaptation pages
│   └── components/
│       ├── galeria.html        # Image gallery (Splide + Magnific Popup)
│       └── secciones.html      # Section renderer
```

## Key Conventions

- Templates use Alpine.js directives (`x-data`, `x-for`, `x-if`, `x-bind`, `x-link`, `x-route`)
- All data comes from the Strapi API; the frontend is purely a presentation layer
- Images are hosted on the Strapi server under `/uploads/` with Strapi's automatic format variants (`thumbnail`, `small`, `medium`, `large`)
- Routes follow the pattern: `/estructura/:id`, `/subestructura/:id`, etc., where `:id` is the URL-slugified name

## Development

- Backend: `npm run develop` (Strapi dev server)
- Frontend: static files in `/public/`, no build step needed -- just serve the directory
- Database: SQLite in development, persistent disk on Render in production
