# JoyPin — HR Consulting & Starter Kit

Landing page for [joypin.site](https://joypin.site), an HR consulting service for startup companies. The hook product is the **HR Starter Kit** — a complete bundle of templates, policies, and a 1-on-1 strategy session for HR startup founders.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (React 19 + TanStack Router) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Deployment | Netlify |
| Forms | Netlify Forms |

## Running Locally

```bash
npm install
npm run dev
```

The dev server runs on [http://localhost:3000](http://localhost:3000) (or port 8888 via Netlify CLI for full Netlify feature emulation).

To use Netlify CLI:

```bash
netlify dev
```

## Project Structure

- `src/routes/index.tsx` — Main landing page (hero, services, starter kit, testimonials, contact form)
- `src/routes/__root.tsx` — Root layout with SEO metadata
- `src/styles.css` — Global styles and Tailwind import
