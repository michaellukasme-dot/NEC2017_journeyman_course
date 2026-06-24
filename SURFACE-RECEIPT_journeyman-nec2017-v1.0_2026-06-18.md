# SURFACE RECEIPT — Amp Academy · NEC 2017 Journeyman · v1.0 surface · 2026-06-18
Brought the Journeyman course (content-only, "no surface") up to full SAS v1. Content UNCHANGED — only the
surface was added. Built under claude_gaude_as_jarvis_2026-06-18_0142pm. Owner deploys.

## Audit (the code, before)
- ✅ Security clean — no key-in-client, no network AI, no fetch(). (Multimeter's worst blocker absent.)
- ✅ Glyph law clean — no robot; symbols (⚡ ☰ ✓ arrows/math) all ≤ Unicode 6.0.
- ✅ Honest-state clean — no placeholder/lorem/sample; "The Weight" absent.
- ✅ Content substantial — 15 modules, 136 quiz Qs, final assessment, 6 state tracks (PA/NJ/DE/MD/NY/CT),
  Perry's 10-Tab, NEC Navigator. References "the Amp Academy Load Calculator to verify" (no rogue calc engine).
- ✅ Mobile drawer already present (hamburger). Completion = position-based ("Lesson X of N") + Final
  Assessment as the real gate — honest (not a fake timer).
- ⚠️ ONLY gap: no PWA (manifest/SW/install) → not installable/offline. + Google-Fonts CDN (offline risk).

## Added (v1.0 surface)
- `manifest.webmanifest` — web-app manifest (name, start_url ./, standalone, navy theme, SVG icon).
- `sw.js` — offline-first runtime cache (`aa-jrny-2017-v1`); caches the page + Google Fonts → works offline.
- `icons/icon.svg` — Amp Academy bolt (navy/amber).
- Injected into `index.html`: `<link rel="manifest">` + theme-color + apple-touch in head; SW register +
  install affordance before `</body>`; build stamp. Content untouched.

## Verify
- PWA present (manifest+SW+install): 1/1/1. Inserted PWA script `node --check` OK. manifest valid JSON.
- Conformance: key-in-client 0 · robot 0 · "The Weight" 0 · Amp Academy brand present.

## Deploy (owner — single-file repo NEC2017_journeyman_course)
Add `manifest.webmanifest`, `sw.js`, `icons/` to the repo root; replace `index.html`. Serve over https
(SW needs non-file://). Relaunch the installed PWA once after deploy.

## Deferred (optional, not blocking)
- Embed the live **v0.5 calculator** interactively into the Load-Calc (Mod 03) / Calc-Mastery (Mod 12)
  modules for in-course practice (currently the course points students to the standalone). Nice enhancement.
- PNG icons (192/512) for broadest install (currently SVG).
- This is JRNY-NEC2017; per the catalog, 2020/2023/2026 editions + levels derive from this; Master fans out.

## RECEIPTS (sha256 · bytes)
  0a89fbc71a66  227031  index.html
  88f6e424d2d2     469  manifest.webmanifest
  7f4b92fdba87     972  sw.js
  f3c3f138195e     284  icons/icon.svg
