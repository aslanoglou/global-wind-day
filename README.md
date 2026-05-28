# Tailwind 4 + Vite Starter

A minimal starter template for fast and modern web development using **Vite**, **Tailwind CSS 4**, and **DDEV**, with automatic image optimization.

This setup is optimized for **local development with DDEV**, including full **Vite HMR (auto-refresh)** on a custom `.ddev.site` domain.

---

## Features

- ⚡ **Vite** – Lightning-fast dev server & build tool
- 🎨 **Tailwind CSS 4** – Utility-first modern styling
- 🔥 **HMR / Auto Refresh** – Instant updates on save (HTML / CSS / JS)
- 🖼️ **Automatic Image Optimization** – PNG → WebP via Sharp
- 🏗️ **HTML Minification** – Using `vite-plugin-html-minify`
- 🧹 **Prettier** – Code formatting
- 🐳 **DDEV Ready** – Works out-of-the-box with `*.ddev.site`

---

## Requirements

- Node.js **18+**
- npm
- **DDEV**

---

## Quick Start (DDEV – Recommended)

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd tailwind-4-vite-starter
npm install
```

### 2. Start DDEV

```bash
ddev start
```

> ℹ️ The project uses `docroot: dist`, so **a build must exist at least once**.

### 3. First-time Build (important)

```bash
ddev npm run build
```

This creates the `dist/` folder required by DDEV.

### 4. Development (with auto-refresh)

```bash
ddev npm run dev
```

Open:

👉 **https://global-wind-day.ddev.site:5174/** if you have run `ddev npm run dev`

👉 **https://global-wind-day.ddev.site** if you have run `ddev npm run build`

✔ Auto refresh / HMR works instantly on save  
✔ No ports needed in the URL  
✔ HTTPS by default

---

## Alternative: Without DDEV

```bash
npm run dev
```

Visit:

```
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Output is generated in:

```
dist/
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
.
├── src/
│   ├── index.html
│   ├── public/
│   │   └── images/
│   └── convert-to-webp.js
├── dist/
├── vite.config.js
├── package.json
└── .ddev/
```

### Key Files

- **`src/convert-to-webp.js`**  
  Converts all PNGs in `src/public/images` to WebP before dev/build.
- **`vite.config.js`**  
  Configured for DDEV + HTTPS + WebSocket HMR.
- **`.ddev/config.yaml`**  
  Exposes Vite ports and defines `dist` as docroot.

---

## Image Optimization

- All `.png` files in `src/public/images/`
- Automatically converted to `.webp`
- Both formats remain available (ideal for `<picture>` usage)

Runs on:
- `npm run dev`
- `npm run build`

---

## Scripts

| Script        | Description                              |
|--------------|------------------------------------------|
| `dev`        | Image conversion + Vite dev server        |
| `build`      | Image conversion + Vite production build |
| `preview`    | Preview production build                 |
| `format`     | Format files with Prettier               |

---

## Notes & Gotchas

- ⚠️ **First build is required** when using DDEV (`dist/` must exist).
- If Vite is not running, the main domain will not respond (proxy setup).
- Auto-refresh relies on **WebSockets (wss)** and HTTPS via DDEV.

---

## License

[ISC](LICENSE)

You’re free to use, learn, and adapt 🚀

---

**Happy building!**
