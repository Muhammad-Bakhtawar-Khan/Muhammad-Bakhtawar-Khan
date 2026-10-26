# Bakhtawar .Khan — Personal Digital Portfolio (MBK)

A responsive static portfolio built with HTML, CSS and vanilla JavaScript.

## Pages
- `index.html` — homepage and featured work
- `about.html` — profile, MBK identity and learning interests
- `projects.html` — MBK Global, MBK TV, MBK Markets, MBK Downloader, Text to Handwriting, Noor-e-Quran and more
- `gallery.html` — self-hosted image-only gallery
- `blog.html` — seven long-form articles about Bakhtawar Khan and the MBK projects
- `news.html` — short notes and updates
- `social.html` — social profiles
- `contact.html` — contact links
- `privacy-policy.html` — privacy information

## Run locally
Open `index.html` in a browser, or use VS Code Live Server. No build step is required.

## Deploy to Vercel
Import the repository in Vercel and use the project root as the root directory. This is a static HTML site, so no framework build command is needed.

## Before publishing
1. Verify every project and social link.
2. Confirm the canonical domain in `sitemap.xml`, `robots.txt` and structured data. The sitemap currently uses `https://muhammad-bakhtawar-khan.vercel.app`.
3. Replace sample or outdated project details with current, verified information.
4. Gallery images are stored locally in `assets/images/gallery/`.
5. The articles are editorial introductions; update them when there are specific new features, measurable outcomes or project milestones to report.

## Contact
Email: Bakhtawark085@gmail.com
WhatsApp: https://wa.me/923200276941


## Latest portfolio refinements
- Homepage portrait has no decorative circle/orbit overlays; the photograph remains the focus.
- Personal branding uses “Founder of MBK Global”; use “Founder & CEO” only after explicit owner confirmation.
- SEO keyword metadata includes Bakhtawar Khan, MBK, MBK Bakhtawar, MBK Global and the related project names across relevant pages.


## SEO package
- `SEO-CHECKLIST.md` — launch and Search Console checklist
- `SEO-KEYWORD-MAP.md` — keyword clusters mapped to relevant pages
- `sitemap.xml` — core pages, standalone articles and image URLs
- `robots.txt` — sitemap declaration
- Seven standalone `article-*.html` pages with unique titles, descriptions, canonical URLs and BlogPosting structured data

SEO aims to help real visitors find relevant content. It does not guarantee Google indexing, rankings, sitelinks or a knowledge panel. Confirm the deployed domain before publishing.

## Services page
The new `services.html` page provides a detailed overview of design, web/app development, API integration, WhatsApp bots, AI and workflow automation, SEO, advertising creatives, video, authorized code analysis, deployment and consulting. Review service descriptions and scope before publishing.


## Gallery: 23 images
Place your images in `assets/images/gallery/` and name them `Image 1` through `Image 23`. Supported extensions are `.jpg`, `.jpeg`, `.png`, and `.webp` (uppercase extensions also work). The gallery tries supported extensions automatically and keeps the image order. For best performance, use compressed WebP/JPEG files and descriptive alt text is provided in the page.

## Services SEO
The `services.html` page includes a unique title and meta description, canonical URL, social sharing metadata, and JSON-LD structured data. Keep the service descriptions accurate to what you can deliver; do not add repetitive keyword lists or promise guaranteed rankings.


## Gallery image hosting
The gallery uses 25 direct public GitHub raw URLs: `https://raw.githubusercontent.com/Muhammad-Bakhtawar-Khan/myimages/main/image1.jpeg` through `image25.jpeg`. Ensure the repository is public and every filename exists exactly as written (case-sensitive). `gallery.html` contains descriptive alt text, lazy loading, responsive layout, Open Graph image metadata, ImageGallery structured data, and the gallery image sitemap entries.


## Launch readiness additions
- `LAUNCH-READY-CHECKLIST.md` identifies included updates and the owner-only steps that still require real account/domain details.
- `404.html` provides a not-found page; `thank-you.html` is reserved for a future connected form and does not send messages by itself.
- `vercel.json` adds basic security response headers.
- `sitemap.xml` includes public HTML pages and excludes noindex utility pages.
- Analytics and a backend contact form are intentionally not fabricated or enabled without the required IDs/provider.


## Professional expansion (October 2026)

Added pages: `case-studies.html`, `hire-me.html`, and `resources.html`. Added practical articles: `article-react-performance.html`, `article-api-integration.html`, `article-ai-automation.html`, and `article-technical-seo.html`. The Blog page links to the new articles, the sitemap includes the new URLs, and the existing visual design system is reused.

Before publishing: check the canonical domain against the actual deployed domain, test all pages on a phone and desktop, verify each project link, confirm WhatsApp form behaviour, and only publish project metrics/testimonials that can be substantiated. Search rankings are not guaranteed.


FAQ update: FAQ content has been moved to the dedicated `faq.html` page and a FAQ navigation link has been added across HTML pages. FAQ blocks were removed from individual pages to reduce repetition.


## Creative FAQ refresh
The dedicated `faq.html` page now includes topic filters, live search, indexed accordion answers, responsive layout, keyboard focus styles, and a project enquiry CTA. Shared CSS includes restrained hover, focus, and reduced-motion refinements.


Portfolio update (October 2026): the Services page now features a creative MBK Service Approach guide; About includes the requested professional focus areas; Projects lists MBK Text to Speech, MBK Number to Info, MBK DP Finder, MBK Bot, and a “More Projects Coming Soon! — By MBK Global” panel. Upcoming items are labelled as in development and are not presented as launched products.


## Identity and SEO architecture update
- `about-muhammad-bakhtawar-khan.html` — factual founder profile and Q&A.
- `official-links.html` — centralized public links and associated project directory.
- `web-development.html`, `ai-api-integration.html`, `technical-seo.html`, `cybersecurity.html`, `digital-branding.html` — service-specific landing pages with scope and limitations.
- `identity-config.json` — maintainer-facing identity/contact/project source and verification notes.
- `IDENTITY-SEO-IMPLEMENTATION-REPORT.md` — implementation summary, live checks and owner review items.

Book a Call now prepares the request in WhatsApp; the visitor must press Send. The robots policy allows OAI-SearchBot for search discovery while keeping GPTBot disallowed. Neither crawling access nor structured data guarantees indexing or AI citation.


## Identity configuration and validation
- `identity-config.json` is the maintainer source for the public identity, contact, profile and project records.
- `scripts/sync_identity.py` synchronizes contact values and primary entity JSON-LD and rebuilds the canonical sitemap. Review the diff before deployment.
- `scripts/validate_identity.py` checks the core configuration, JSON-LD blocks, sitemap and required pages. Run with `python scripts/validate_identity.py`.
- `IDENTITY-CONTENT-ARCHITECTURE.md` documents the question-answer and page-link architecture.
- `POST-DEPLOYMENT-MONITORING.md` lists launch and monitoring checks.
