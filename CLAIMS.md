# PoolOps · Claims Registry

**Purpose.** A single source of truth for every number, percentage, testimonial, comparison, and guarantee that appears in PoolOps marketing — ads, VSLs, websites, email, sales calls, decks, social.

**Rule.** Nothing goes into a piece of marketing that is not in this file. New claim? Add it here *first*, with a source. If you can't source it, it ships in Tier C or it doesn't ship.

**Maintained by.** Brandon (owner) · one editor keeps it consistent. Changes reviewed monthly against actual product data.

---

## The three tiers

| Tier | What it is | Where it can appear | How it's written |
|---|---|---|---|
| **A · Facts** | Pricing, packaging, feature existence. Under your direct control. | Anywhere, freely | Plain. "$79/mo flat." |
| **B · Measured** | Performance claim backed by real PoolOps data or a cited study. | Anywhere — must carry its qualifier | With scope. "Avg. 38% less drive time across first 40 pilot customers, Q2 2026." |
| **C · Illustrative** | Narrative scenes, example figures, composite testimonials, aspirational numbers used for storytelling. | Long-form only (VSLs, landing pages). Never as a headline stat on an ad. | Labeled. "Illustrative example · your figures will vary." |

**When in doubt, demote.** Unsure if a number is Tier B or C? It's C until you can show the data.

---

## Tier A · Facts (always ok to use)

These are under our direct control. If any change, edit here first, then grep the repos for the old value.

| ID | Claim | Current value | Last verified |
|---|---|---|---|
| A.price.core | Monthly price, core tier | **$79 / mo, flat** | 2026-04-19 |
| A.price.pool_fees | Per-pool fees | **None** | 2026-04-19 |
| A.price.tech_fees | Per-technician fees | **None** | 2026-04-19 |
| A.limit.techs | Techs included in core tier | **Up to 3** | 2026-04-19 |
| A.limit.pools | Pools included in core tier | **Up to 200** | 2026-04-19 |
| A.trial.length | Free trial | **14 days** | 2026-04-19 |
| A.trial.card | Card required for trial | **No** | 2026-04-19 |
| A.offline.mode | True offline mode on mobile | **Yes** | 2026-04-19 |
| A.price.commercial | Commercial tier entry price | **From $299 / mo** (soft — confirm before shipping broadly) | 2026-04-19 |
| A.price.command | Enterprise / Command tier entry price | **From $1,200 / mo** (soft — confirm) | 2026-04-19 |

---

## Tier B · Measured (use with qualifier, cite source)

**Required format.** Every Tier B claim carries a qualifier in the piece itself: sample size, time window, cohort. Never "38% less driving." Always "38% less driving across our first N pilot customers in Q2 2026."

| ID | Claim | Current handling | Source | Status |
|---|---|---|---|---|
| B.route.drive_reduction | Reduction in drive time from route optimization | Used as **"38% less drive time"** in 04 pieces | **NEEDS REAL DATA** — currently aspirational; move to Tier C until we have ≥10 paying customers' before/after data | ⚠️ Gap |
| B.route.extra_stops | Extra stops per day from optimization | **+4–6 stops / day** | Same as above. Directionally plausible from pilot; not yet a defensible population average | ⚠️ Gap |
| B.savings.annual | Annual savings per route | **$4,000+ / yr** | Derived figure from fuel + labor + callback recovery; show the math not the total | ⚠️ Gap — currently used as a headline number |
| B.callbacks.reduction | Reduction in chemistry-driven callbacks | **−74%** cited in 06 | **FABRICATED for creative mood** — do not use until real data exists | 🔴 Remove |
| B.dso.improvement | Reduction in days to get paid | **21-day reduction** cited in 06 | **FABRICATED.** Plausible with same-day invoicing + portal but unvalidated | 🔴 Remove |
| B.setup.time | Onboarding time from spreadsheet import | **5 minutes** / **48 hours** | Directionally accurate for simple routes; qualify as "most customers" | ✅ Use w/ qualifier |
| B.retention.chem_users | Retention of chemistry-tracking users vs non-users | **95% vs 60%** cited in KILLER_FEATURE.md | **FABRICATED** — do not use externally | 🔴 Remove |
| B.callback.cost | Cost of a single chemistry callback | **$150–$500** | Industry-conventional range; usable as "industry-typical" not "PoolOps data" | ✅ Use w/ "industry" framing |
| B.customers.count | Number of paying operators | **214 operators** cited in 06, **300+** in 01 | **FABRICATED.** Use real current count only; never invent one | 🔴 Remove |
| B.roi.median | Median ROI multiple | **11×** cited in 06 | **FABRICATED.** Needs real cohort data | 🔴 Remove |

**Rule for Tier B.** If status is ⚠️ Gap or 🔴 Remove, the claim does not appear in new marketing without explicit sign-off. Piece-level edits to strip or replace these listed in "Audit of the 10 launch pieces" below.

---

## Tier C · Illustrative (label clearly, long-form only)

Narrative, story, mood. Labeled or obviously fictional. Never stated as fact.

| ID | Claim | Where it's used | Label convention |
|---|---|---|---|
| C.story.seven_am | "7am call — my pool is green" | 03 Callbacks VSL | Framed as "A PoolOps Story · Essay" — already clear this is narrative |
| C.testimonial.ray_k | "Ray K., 34 pools, Greensboro NC" | 01 Veteran FB ad | **Fabricated.** Mark as illustrative or replace with a real quote |
| C.testimonial.m_reyes | "M. Reyes, Clear Creek Pool Svc, Scottsdale AZ" | 06 ROI VSL | **Fabricated.** Same as above |
| C.testimonial.k_hannigan | "K. Hannigan, Crescent Hotels, 18 properties" | 04 Commercial site | **Fabricated.** Same as above |
| C.testimonial.raul_p | "Raul P., Clear Water Pool Co., Scottsdale AZ" | 07 Sunbelt site | **Fabricated.** Same as above |
| C.testimonial.marco | "Marco, exit interview" | 08 Tech Retention FB ad | **Fabricated composite.** Acceptable with "Composite example from operator interviews" label |
| C.founder.travis_keener | "Travis Keener, Founder" | 09 Founder VSL | **Fabricated name.** Replace with Brandon's real name + real story before this letter ships to a customer |
| C.logos.trust_strip | Harborview, Riverside HOA, Crescent Hotels, YMCA Region 4, etc. | 04 Commercial site | **Fabricated logos.** Hide, remove, or replace with "Customer logos coming soon" until real |
| C.logos.command_strip | Bluewater Cos., Crystal Coast, Palmetto Group, etc. | 10 Command site | **Fabricated.** Same |
| C.uptime.sla | "99.99% Uptime SLA" | 10 Command site | **Overstated.** Replace with "Operational target" or remove until SLA is contractually real |

---

## Audit of the 10 launch pieces

Items flagged here need action before the piece is run as a paid ad or linked from the main site. Showcase (GitHub Pages) can keep them with illustrative framing.

| Piece | Flagged claim | Action |
|---|---|---|
| 01 Veteran FB ad | "Ray K., 34 pools, Greensboro NC" testimonial | Mark as illustrative OR replace with real quote |
| 01 Veteran FB ad | "300+ veterans trust PoolOps" (in CTA caption) | Remove number; soften to "Built with veteran operators" |
| 02 Hustler FB ad | "+4–6 stops/day from Day 1" | Add qualifier: "Pilot customers saw this; your results may vary" |
| 03 Callbacks VSL | "$312 chemicals · 4.5h labor · $2,400 at-risk revenue" | Already framed as an essay/scene — add footer "Illustrative example" |
| 04 Commercial site | Crescent Hotels / YMCA / Harborview logo strip | Remove logo strip until real logos exist; replace with "Customer logos coming soon" |
| 04 Commercial site | "K. Hannigan, Crescent Hotels" quote | Mark illustrative |
| 05 Route Buyer FB ad | "−38% drive time across 214 imported routes · 2024–2026" | Remove "214 imported routes · 2024–2026" until real; keep soft framing |
| 05 Route Buyer FB ad | "$4,180 mean yearly savings" | Replace with illustrative framing: "Illustrative route · your figures will vary" |
| 06 ROI VSL | "214 operators · Median ROI 11× · 4.1 yrs analyzed" | Hard remove. Replace with "Illustrative cohort · figures for demonstration" |
| 06 ROI VSL | "ANNUAL BLEED · $4,184 ± $312 · CONFIDENCE 0.94" | Hard remove the precision. Keep headline $4,184 only with "Illustrative estimate" |
| 06 ROI VSL | "M. Reyes, Clear Creek Pool Svc" field note | Mark illustrative |
| 07 Sunbelt site | "−41% callbacks / +$4,680 yearly / 22d→6d DSO / +6.2 stops" heat map cards | Add small footer: "Representative figures · pilot cohort" |
| 07 Sunbelt site | "Raul P." testimonial | Mark illustrative |
| 08 Tech Retention | "Source: 200 route operator interviews · Q1 2026" | Remove specific count unless real; soften to "pulled from operator interviews" |
| 08 Tech Retention | "Marco" exit interview quote | Label as "Composite from operator interviews" |
| 09 Founder VSL | "Travis Keener" name + "(512) 555-0194" number + Round Rock backstory | Replace with Brandon's real name, real city, real number before this letter is sent to a real prospect |
| 10 Multi-location | "99.99% Uptime SLA" | Change to "99.9% operational target" until SLA exists in MSA |
| 10 Multi-location | "SOC 2 Type II · SSO · SAML" on the enterprise line | Only claim when actually certified / shipped. Until then: "SOC 2 in progress" |
| 10 Multi-location | Bluewater / Crystal Coast / Palmetto Group logos | Remove strip until real |

---

## Approved copy snippets (copy-paste library)

Use these verbatim in new marketing. Edit here if wording needs to change — then propagate.

### Pricing line — short
> $79/month flat. Up to 3 techs, 200 pools. No per-pool fees.

### Pricing line — long
> PoolOps is $79 per month, flat — up to 3 technicians and 200 pools. No per-pool fees. No per-tech fees. 14-day free trial; no card required.

### Positioning — one sentence
> Pool service management built for 2–15 technician operators — route optimization, chemistry tracking, and invoicing in one place.

### Chemistry angle — soft claim
> PoolOps is the only pool-service software designed around chemistry tracking, which prevents the green-pool callbacks that cost most operators $150–$500 each.

### Route angle — soft claim (use while waiting for real data)
> PoolOps reorders your route to cut driving time — pilot customers typically see meaningful reductions in daily drive hours within the first two weeks. *(Replace "pilot customers typically see meaningful reductions" with the real number + sample size as soon as we have it.)*

### Guarantee — offer line
> Try PoolOps free for 14 days. If it doesn't save you time, email us — we'll refund the first month.

---

## Standard disclosure footer

Every long-form marketing page (VSL, landing page, website) carries a small disclosure near the footer:

> *Performance figures shown on this page reflect illustrative examples and pilot-cohort observations. Your results will vary with route size, market, and chemistry baseline. Current sourcing at poolops.com/trust.*

Short-form (Facebook/Instagram static ads) can omit the disclosure, but the creative itself cannot state Tier B numbers without a qualifier or Tier C label.

---

## Change log

- **2026-04-19 · v1.0** — Initial registry. Triaged the 10 creative pieces in `creative-showcase/`. Flagged fabricated studies (214 operators, 11× ROI), fabricated testimonials (Ray K., M. Reyes, K. Hannigan, Raul P., Travis Keener), and overstated enterprise claims (99.99% SLA, SOC 2). Established the three-tier system.

---

## Open questions for Brandon

1. **Founder name.** The 09 Founder VSL is written as "Travis Keener from Round Rock, TX." Replace with Brandon's real name + real story? Or is a pen name acceptable?
2. **Current customer count.** How many paying operators are on PoolOps today? This is the only defensible number for the "N+ operators" claims.
3. **Real testimonials.** Do we have any real customer quotes we can use with permission? If not, every testimonial on the site needs to be labeled illustrative until we do.
4. **Real route data.** What's the actual average drive-time reduction across current customers? Real number replaces "−38%" everywhere in one find-and-replace.
