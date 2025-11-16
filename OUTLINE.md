# Wait-list

I am going to build a full stack production grade wait-list. I am trying to learn Astro, Hono and Cloudflare and this seems like a perfect opportunity for it.

I am also currently unemployed. I graduated in May 2025 and have had a terrible time with interviews and job applications in general so I'm going to start building my SaaS ideas.

I fell in love with Computer science because it just made sense to me. Even when I was constantly distracted in class, I was able to understand Math and Computer Science. However, for the life of me, I could not understand languages and had to put in hours after school just to be competent.

I always liked building things and how every decision that may seem small in the hindsight can have a large impact later.

After this job search cycle, majority of my friends and peers that I graduated with got a job while I'm still unemployed. This job search has killed my love for computer science multiple times but I always come back. I started by learning multiple languages, learning about the best practices, system design and what not. However, I realized very quickly that I'm not applying what I've learned to build solutions for problems that I face everyday.

So I'm going to start building solutions, something that I've always loved.

I am going to start with a production grade Wait-list based on everything that I've learned over the past few years.

This outline is going to contain way more details than I've previously provided for my projects

## Goals

- Personal Goal: I am going to use this wait-list to validate all of my product ideas. I am going to reuse this wait-list for future solutions that I'm going to provide.
- Learning Goal: I want to apply everything that I've learned over the past few months. I also want to learn Astro and Hono in depth, something that I've always avoided in general.

## Planned Tech Stack (Subject to Changes)

- Hono (for backend)
- Astro (frontend framework)
- React (frontend library)
- Zod (for validation)
- Drizzle ORM (database handling and interaction)
- Tailwind CSS (styling)
- Cloudflare Workers (JS runtime workers, similar to vercel edge functions)
- Cloudflare D1 (database solution)
- Pnpm (package manager)
- Sentry (performance monitoring)
- GitHub Actions (CI/CD)
- Resend (sending emails)

## Planned Features (Subject to Changes)

- Metrics (to measure success)
  - Number of Signups
  - Conversion Rate (Visitors vs Signups)
  - Traffic Sources (media channel data)
- Content
  - Headline - Problem that I plan to solve
  - Sub headline - Type of product vs Customer base for the product
  - Benefits - Outcomes of signing up
  - Estimated launch date
  - Social Proof - Why I'm making this product
  - Footer - Standard footer content
- Signup Process
  - User enters the email & clicks submit
  - Feedback
  - Receives confirmation email
  - Clicks confirm button in email
  - Redirected to Thank you/Confirmation page
- Signup Counter
  - Marketing purposes, provide social proof
  - Live updates with web sockets
- System Monitoring
  - Sentry - For catching errors
  - Cloudflare Dashboard logging
- Bot prevention
  - Block bad traffic in Cloudflare
  - Cloudflare Turnstile (free captcha alternative, easy integration in the ecosystem)
- Custom Domain
  - Configure domain with Cloudflare
  - Ensure SSL
- SEO and Performance
  - SSG with Astro
  - Meta tags
  - Sitemaps.xml
  - Robots.txt
- Accessibility
  - Semantic HTML tags
  - Aria Labels
  - Astro's builtin dev tools
  - Eslint jsx plugin
- CI/CD using GitHub Actions
- Security Features
  - CSRF Protection
  - CORS Protection
- Design
  - Mobile first design principles
  - Supports
- Basic Website Navigation and Routing
  - 404 error page that routes back
  - Copyright
  - Terms & Conditions
  - Privacy Policy
  - Contact methods
- Rate Limiting
