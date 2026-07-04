# Physical Visions Site Rebuild — Working Memory

## Status
Home page built and verified in-browser (desktop + mobile). Real copy, real testimonials, real coach bio and photo, live GHL booking widget all working. This repo was empty (just an initialized git repo, no commits) at the start of this session.

## Open Actions
- [ ] Cody reviews the Home page and flags anything to change
- [ ] Define copy/offers for Resources, Pricing, and Booking pages (not yet defined anywhere — see Rebuild Architecture "Open item")
- [ ] Build Resources, Pricing, Booking pages once content is defined
- [ ] Compress `assets/cody-photo.jpg` (currently ~2.9MB — large for web; came straight from the vault's Marketing/Assets folder unresized)
- [ ] Commit and push to `CharlieCodes54/Physicalvisions`, connect Cloudflare Pages
- [ ] Confirm the Instagram handle `@physicalvisions` in the footer — copied from a placeholder note in the church-event landing page research, marked "Cody to confirm"

## Session Log

### 2026-07-04
- Found this repo empty (git initialized, no commits) despite an in-progress unsaved buffer open in the IDE with hero + journey markup — that draft matched the first-pass prototype already sitting in `MyAIBrain/work/Physical Visions/Projects/Web Pages/` (index.html + styles.css, hero and "how it works" sections only).
- Read the vault's Brand Discovery, Rebuild Architecture, and WORKING_MEMORY docs to pick up the locked design direction: gold `#FDCA40` accent, cream base + warm tan "grounded" sections (not the pale-blue grounded-bg the Web Pages draft had used — that contradicted Brand Discovery's explicit "warm cream/tan" call, so it was corrected here), Fraunces for headlines (the Web Pages draft still had Playfair Display, an earlier choice superseded by the Session 2 decision), Inter for body, continuous cloud drift + gentle floating cards.
- Found real content already researched for a related project (Operation Church Event's "Free Group Training" landing page) that turned out to be the same real copy as the live physicalvisions.com funnel per Brand Discovery's audit — reused directly: real testimonials (Barb Catlin, Arati Patel, PJ), Cody's real bio/credentials (NASM CPT, NASM Sport Nutrition, RAD-T, 12 years), real FAQ, real contact info, and the real GHL booking widget embed code.
- Found real brand photo assets (not the placeholder set) at `MyAIBrain/work/Physical Visions/Marketing/Assets/` — copied `Cody-photo.jpeg`, `testimonial-{arati,barb,pj}.jpg`, `pv-logo.PNG`, `Clouds-bg.jpg` into this repo's `assets/` (renamed to lowercase for Linux-safe deploy on Cloudflare Pages).
- Built out the full Home page: nav w/ mobile hamburger menu, hero (kept from the draft), "how it works" journey rows (kept, asymmetric per the anti-slop direction), new "who this is for" section, new coach bio section, new testimonials section (one featured + two stacked, not three equal cards — matches the "break the three-card pattern" direction), booking section with live countdown + seats-left + the actual GHL calendar widget, FAQ as a side-by-side grid (not an accordion, per Brand Discovery idea #6), footer.
- Verified in Chrome via chrome-devtools MCP at both desktop (1440px) and mobile (390px) widths. Caught and fixed two real bugs: (1) `.reveal` scroll-fade elements need a moment for the IntersectionObserver to fire — first screenshot was stale, not an actual bug; (2) the mobile nav dropdown was painting *behind* the hero section's own content because both `.nav-links` (position: absolute, z-index: auto) and `.hero` (position: relative, z-index: auto) were positioned elements with auto z-index, and DOM order put `.hero` on top — fixed by giving `.nav-links` an explicit `z-index: 30`.
- Confirmed the GHL widget is genuinely live — it rendered the real "Free Nutrition Coaching Group" calendar with real July 2026 dates during the browser check, not a placeholder.

## Relations
- Vault project: `MyAIBrain/work/Physical Visions/Projects/Web Pages/` (Brand Discovery, Rebuild Architecture, WORKING_MEMORY)
- Copy source: `MyAIBrain/work/Physical Visions/Projects/Operation Church Event/Landing page-Free group training/_research/page-copy.md`
- Asset source: `MyAIBrain/work/Physical Visions/Marketing/Assets/`
