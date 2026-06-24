# SURFACE RECEIPT — Amp Academy · NEC 2017 Journeyman · v1.1 (in-course Load Calculator) · 2026-06-18
Adds the live, verified Load Calculator into the course for in-page practice. Built under
claude_gaude_as_jarvis_2026-06-18_0142pm. Owner deploys. Internal — do NOT upload to the repo.

## What changed (v1.0 surface → v1.1)
- **Engine inlined once:** `AA-CALC-CORE v0.5` (sha256 7165e1a8…) — the same verified compute core as the
  standalone Load Calculator and ECC. Pure compute, no DOM, no key, no network. Exposed as `window.AmpCalc`.
- **One reusable widget, two mounts:** `window.AAEmbedCalc.mount()` renders a compact Standard + Optional
  Method dwelling calculator into:
  - **Module 3 — Lesson 3.1** (`p-j_load_calc_standard`), under the worked example.
  - **Module 12 — Remediation** (`p-j_rem_mod12`), as a "verify your hand calcs" tool.
- **Defaults pre-loaded to the lesson's worked example** → the widget opens showing **27,025 VA → 113 A →
  125 A OCPD**, matching the printed Annex D D1 example exactly (instant trust, no contradiction).
- **Navigator card updated:** now says the calculator is built into Mod 3 + Mod 12; standalone URL retained.
- **SW cache bumped** `aa-jrny-2017-v1` → `v2`.

## Honest-state decision (important)
The widget computes through the UNAMBIGUOUS chain: 5-step VA breakdown → Standard total → service amps →
OCPD, plus the Optional Method (220.82) total. It deliberately does **NOT** display conductor/GEC sizing,
because the standalone sizes the conductor to load amps (→ #2 AWG for the D1 example) while the lesson's
printed worked example states 1/0 AWG — a real 310.12 dwelling-conductor divergence that belongs to the
Sader printed-NEC gate, not to a silent in-widget "correction." The widget defers conductor/GEC to the full
standalone with a visible note. No on-page contradiction.

## Verify
- Engine reproduces the lesson example: 27,025 VA / 113 A / 125 A OCPD; Optional 20,440 VA / 86 A. ✅
- Widget default-input path == that result (headless engine parity). ✅
- All 4 inline `<script>` blocks `node --check` OK; `<script>`/`</script>` tags balanced 4/4. ✅
- Mounts present: 2; `window.AAEmbedCalc` + `root.AmpCalc` present. ✅
- Content otherwise untouched; pre-embed backup at `_archive/index-PRE-calcembed_2026-06-18.html`.

## Deploy (owner — repo NEC2017_journeyman_course)
Replace `index.html` and `sw.js`. (manifest/icons unchanged from v1.0.) Hard-reload; the v2 SW evicts the
v1 cache and re-caches. Smoke: open Module 3 → Lesson 3.1, confirm the calculator shows 27,025 VA; change an
input and watch it recompute; confirm Module 12 remediation shows the same tool.

## RECEIPTS (bytes)
  index.html  ~263,756   (was 227,031)
  sw.js       cache aa-jrny-2017-v2
  engine      AA-CALC-CORE v0.5  sha256 7165e1a89ab3dc5cba2b67af918583e198eeca28b949f07136489a11da27aa26
