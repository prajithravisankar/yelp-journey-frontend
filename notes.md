# Yelp Journey – Frontend Notes

## 0. Stack & Setup

- Framework: Next.js 15 (App Router) + React + TypeScript
- Styling: Tailwind CSS + shadcn/ui
- Animation: Framer Motion
- Data fetching: React Query
- Maps: Mapbox GL JS
- Icons: Lucide

### Project Setup Summary

- [x] Created GitHub repo `yelp-journey-frontend`
- [x] Bootstrapped Next.js app with TypeScript & Tailwind
- [x] Installed React Query, Framer Motion, Lucide, Mapbox GL
- [x] Initialized shadcn/ui

> This repo will implement the web UI for the “Yelp Journey” group discovery app:
>
> - screens for creating/joining journeys
> - mood selection
> - route comparison
> - journey following with map & badges

---

## vertical slice 1: Authentication
- `npm install next-auth`
- creating a handles in this file: `app/api/auth/[...nextauth]/route.ts`
  - what is the purpose of [...nextauth]?
    - It is a catch-all route that NextAuth.js uses to handle various authentication-related requests.
    - The square brackets `[]` indicate that it is a dynamic route segment, and the ellipsis `...` means it can match multiple segments.
    - Dynamic routing allows NextAuth.js to handle different authentication actions (like sign-in, sign-out, callback handling, etc.) through a single route file.
    - When a request is made to any of these authentication-related endpoints, Next.js will route the request to this file, where NextAuth.js can process it accordingly.
    - The ellipsis allows for flexibility in handling various authentication actions without needing to create separate route files for each action.
    - For example, requests to `/api/auth/signin`, `/api/auth/signout`, and `/api/auth/callback` will all be handled by this single route file.
    - what is the purpose of route.ts? 
      - route.ts is a file used in Next.js applications to define API routes.
- refer [route.ts](app/api/auth/[...nextauth]/route.ts). 
  - This registers NextAuth API route in your Next.js app.
  - NextAuth handles cookies and session management automatically.
