# Physical Visions — Site Rebuild — Index

## Status
Home page (v1) built and working. Static HTML/CSS/JS, no build tools, deploys as-is to Cloudflare Pages. Resources, Pricing, and Booking pages are not started yet (see Rebuild Architecture doc in the vault for scope).

## Files

| File / Folder | Purpose |
|---|---|
| `index.html` | Home page — nav, hero, "how it works", "who this is for", coach bio, testimonials, booking (live GHL widget), FAQ, footer |
| `styles.css` | All design tokens (gold/cream/tan, Fraunces + Inter) and section styles |
| `script.js` | Countdown to next Thursday call, seats-left display, mobile nav toggle, scroll-reveal animation |
| `assets/` | Real brand photos and logo — clouds-bg.jpg, pv-logo.png, cody-photo.jpg, testimonial-{arati,barb,pj}.jpg |

## Source of truth
Brand direction, copy, and architecture decisions live in the vault, not here:
- `MyAIBrain/work/Physical Visions/Projects/Web Pages/Brand Discovery.md` — visual direction, dial targets
- `MyAIBrain/work/Physical Visions/Projects/Web Pages/Rebuild Architecture.md` — stack, page scope, deploy/cutover plan
- `MyAIBrain/work/Physical Visions/Projects/Web Pages/WORKING_MEMORY.md` — session log

## Next
- Cody reviews Home in browser (open `index.html` directly, or use the IDE's Simple Browser / a Live Server extension)
- Define copy/offers for Resources, Pricing, Booking pages, then build them
- Push to `CharlieCodes54/Physicalvisions` GitHub repo and connect Cloudflare Pages for a preview URL
