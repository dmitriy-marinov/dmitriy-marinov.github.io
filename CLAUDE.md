# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static Russian-language business card website for a legal services professional (Дмитрий Маринов). No build tools, no package manager, no backend — pure vanilla HTML/CSS/JS served directly from files.

## Running Locally

```bash
python -m http.server 8000
# or
npx http-server .
```

Then open `http://localhost:8000` in a browser. Alternatively, open `index.html` directly.

## Architecture

Three files contain all code:

- **`index.html`** — All page content and structure. Sections (in order): header/nav, hero, services (`#services`), advantages (`#advantages`), process (`#process`), contact (`#contact`), footer.
- **`style.css`** — All styling. Uses CSS custom properties (`--clr-primary`, `--clr-accent`, `--font-body`, `--shadow`, `--transition`, etc.) defined at `:root`. BEM naming throughout (`header__inner`, `nav__link`, `service-card__title`).
- **`script.js`** — All interactivity: scroll-triggered header shadow, mobile burger menu, IntersectionObserver for active nav link highlighting and scroll-in animations, contact details reveal toggle, phone input masking, client-side form validation with simulated submission.

External dependencies are CDN-only: Google Fonts (Roboto) and FontAwesome 6.5.1.

## Key Details

- **Contact form has no backend** — submission is simulated with `setTimeout`. Wiring up a real endpoint requires adding a `fetch`/`mailto` call in `script.js`.
- **Contact info is hidden behind a toggle** by design (privacy feature, not a bug). The reveal button in `#contact` shows phone/email/Telegram on click.
- **Language:** All content is in Russian (`<html lang="ru">`).
- **No assets directory content** — `assets/` exists but is empty; images/icons are all inline SVG or FontAwesome.
