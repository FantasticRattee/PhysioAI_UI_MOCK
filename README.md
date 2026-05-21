# UI-Mock — PhysioAI multi-page navigable mockup

Real navigable HTML mockup, **one file per screen**, linked together with `<a href>` navigation. No build step, no framework install — opens in any modern browser via a local HTTP server.

---

## 🚀 Run

Browsers block external script loading via `file://` (security/CORS), so use a local server:

```bash
cd /Users/rattee/Desktop/PhysioAI/UI-Mock
python3 -m http.server 5500
```

Then open **http://localhost:5500** in your browser.

Alternative servers:
- `npx serve -l 5500`
- VS Code → install **Live Server** extension → right-click `index.html` → Open with Live Server

---

## 📁 Structure

```
UI-Mock/
├── index.html                  ← Landing — role picker (Patient / Therapist)
│
├── patient/                    ← Mobile screens (rendered in Phone bezel)
│   ├── home.html               ← Mode picker (clicks navigate to mode's screen)
│   ├── practice.html           ← Live exercise session
│   ├── audio.html              ← Audio-Only mode
│   └── visual.html             ← Visual-Only mode
│
├── therapist/                  ← Web screens (full viewport)
│   ├── dashboard.html          ← Async patient review dashboard
│   └── capture.html            ← BlazePose reference capture + validate
│
└── shared/                     ← Loaded by every page
    ├── style.css               ← Global CSS, design tokens, layout helpers
    ├── components.js           ← All React components (Pose skeleton, screens, etc.)
    └── nav.js                  ← Floating top-right nav bar + helpers
```

---

## 🧭 Navigation

**Floating top-right nav** appears on every page with:

1. 🏠 **Home** — back to landing (`index.html`)
2. **[Current screen ▼]** — dropdown menu with all 6 screens, grouped Patient / Therapist
3. 🌐 **English / ภาษาไทย** — toggles language across all pages (persisted in `localStorage`)

**Inside the patient `home.html`** (mode picker), clicking a mode card navigates directly to that mode's HTML file:

| Mode card clicked | Goes to |
|---|---|
| Patient Practice | `patient/practice.html` |
| Audio-Only | `patient/audio.html` |
| Visual-Only | `patient/visual.html` |
| Therapist Setup | `therapist/capture.html` |
| Therapist Dashboard | `therapist/dashboard.html` |

**Standard browser navigation works:**
- Click any nav link → URL bar updates to real `.html` path
- Browser back/forward buttons work
- You can bookmark any individual screen
- Direct-link to a specific page

---

## ➕ Add a new screen

1. Create `patient/newpage.html` (or `therapist/newpage.html`)
2. Copy any existing page as a template — only the inner `<App>` JSX needs to change
3. Add a new entry to `NAV_ROUTES` array in `shared/nav.js` so it appears in the nav menu

That's it. The shared CSS + components.js + nav.js are reused automatically.

---

## 🎨 Re-style

All design tokens live in `shared/components.js` at the very top (`pxTokens` constant — colors, radii, fonts, shadow). Change a value there → every screen updates.

Mobile shell + web shell + landing styles are in `shared/style.css`.

---

## 🛠️ Tech stack

- **No build step** — React + Babel via CDN
- **No framework install** — just HTML + CSS + JS files
- **Shared components** loaded via `<script type="text/babel" data-presets="react" src="...">`
- **Language persistence** — `localStorage` key `physioai.lang`

---

## 🔁 Related

- Design canvas (read-only previews of all screens): `../Design - UI/PhysioAI - 2.html`
- Real BlazePose tester (working camera + pose detection): `../App/MediaBlazePose - Tester/`
- React Native app skeleton: `../App/mobile/`
