---
date: 2026-07-04
type: working-memory
description: Working memory for the Physicalvisions.pages.dev static site repo — build status, open actions, session log.
tags:
  - physical-visions
  - web
ai-first: true
---

# Physical Visions Site Rebuild — Working Memory

[[work/Physical Visions/Projects/Web Pages/_index]]

## Status
All 4 pages (Home, Resources, Pricing, Booking) live at physicalvisions.pages.dev. Resources and Pricing were redesigned 2026-07-04 around the real customer journey (free call → $50/mo Trainerize access → add-ons → VIP → PT last), with all prices confirmed live in Trainerize and one real checkout link wired in.

## Open Actions
- [ ] Cody reviews the redesigned Resources/Pricing pages and flags anything to change
- [ ] Cody to confirm exact Trainerize↔Apple Health connection steps if more precision than the current generic "turn on your phone's Health app" copy is wanted
- [ ] GHL check-in/intake form ID still needed for resources.html's placeholder card
- [ ] Sales-gating workflow for T2/VIP/PT products (whether T2 one-time plans or VIP require active $50/mo base access) is still undecided by Cody — pricing.html deliberately doesn't assert a relationship for VIP; do not guess
- [ ] Real Trainerize checkout links for T2/VIP/PT/weekly-check-in add-ons are intentionally NOT wired yet (still routed to booking.html) — only "Access to Trainerize" ($50/mo) has a real link, per Cody's explicit scope call on 2026-07-04
- [ ] Compress `assets/cody-photo.jpg` (currently ~2.9MB — large for web; came straight from the vault's Marketing/Assets folder unresized)
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

### 2026-07-04 (session 2 — Resources/Pricing redesign)
- Cody walked through the real Trainerize product catalog live (admin panel + public storefront) and confirmed every previously-`[NEEDS CODY INPUT: exact price]` price on pricing.html. All 5 gaps resolved with real numbers.
- Found the real gateway product "Access to Trainerize — $50/month" (initially missed on first pass through the catalog; caught it on a closer re-check).
- Redesigned resources.html from generic nutrition education into a 4-step "get set up" journey (NASM calculator → MyFitnessPal → phone Health app → Trainerize access), reusing real vetted copy/links from an old, never-deployed "Operation Church Event" resources page project, plus a new video section (`.video-embed` CSS utility, two real YouTube tutorials).
- Redesigned pricing.html: added a free-call intro, replaced the "Tier 1 Coaching Membership" placeholder with "Access to Trainerize $50/month" (real link), reordered/completed the addon-groups with explicit "$50 more, $100/mo total" math copy, filled the VIP placeholder, and moved Personal Training from first to last position per Cody's explicit "different demographic, not the headline offer" instruction.
- Caught and fixed a real bug during live verification: the Fable agent's first-pass checkout link (`planGUID=e9c6297ffedb4d6098d94ffd96425f27`) actually pointed to the $150 one-time Custom Workout Plan, not the $50/month Access to Trainerize product. Verified independently in a real browser before touching anything, got Cody's explicit confirmation, then corrected both pages to the real link (`planGUID=cea01dc8196a479ca8fe36c1b792c0fa`). Also removed two `&mdash;` em-dashes that had slipped into visible CTA copy.
- Commits: `643455e`, `e1f7f03` (initial redesign), `f4f833f` (checkout-link + em-dash fix). Both pages live-verified afterward, console clean.
- Deliberately did NOT wire real Trainerize checkout links for the T2/VIP/PT/weekly-check-in add-ons — Cody hasn't finalized the internal sales-gating workflow yet. Every other CTA still routes to booking.html.
- magic-mcp's `21st_magic_component_inspiration` tool errored out (not configured this session) — used the existing design-taste skill bundle instead.

## Relations
- Vault project: [[work/Physical Visions/Projects/Web Pages/_index]] (Brand Discovery, Rebuild Architecture, WORKING_MEMORY)
- Copy source: `MyAIBrain/work/Physical Visions/Projects/Operation Church Event/Landing page-Free group training/_research/page-copy.md`
- Old resources-page content source (real NASM/MFP/Trainerize links, different obsolete design system): `MyAIBrain/work/Physical Visions/Projects/Web Pages/Resources Page/`
- Asset source: `MyAIBrain/work/Physical Visions/Marketing/Assets/`
- Pricing source: `MyAIBrain/work/Physical Visions/Trainerize/updated-pricing-and-product-structure.md`
