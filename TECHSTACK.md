# Frontend

- SSG with Astro
- Signup
  - Validate email in browser
  - Disable "join" button & show loading after click to prevent spamming
  - Show success/error after
- Confirmation Page
  - User is redirected to confirmation page when they click the confirm email button
- Subscriber Count
  - Need loading/error state
- SEO
  - Tags for sharing on social media
  - Sitemap.xml
  - Robots.txt
- Mobile & Desktop friendly design (Mobile first design)
- 404 Error Page
- Legal Boilerplate

# Backend

- Hono REST API
  - CSRF Middleware
  - Rate Limiting to prevent malicious actors
- Drizzle ORM
  - Manage the database connection, migrations, and queries

## API Endpoints

- GET /api/subscriber-count
  - Gets the total number of subscriber

- POST /api/signup
  - Zod validation on email & save to DB
  - Clean addressing
  - Sentry error capture & alert
  - Optional query param for traffic source
  - Generate confirmation token & save to DB
  - Send confirmation email via Resend

- GET /api/confirm
  - Accepts a query param token
  - Looks for confirmation token in the database & updates subscriber
  - Redirects user to confirmation page

# Database

- Cloudflare D1
  - SQLite based database
- Subscriber table
  - email
  - createdAt
  - updatedAt
  - trafficSource
  - device
  - emailVerification
  - unsubscribed
  - confirmationToken
