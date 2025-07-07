# Patreon Clone - Next.js 15 & Sanity CMS

A modern, membership platform built with Next.js 15, Sanity CMS, and Clerk authentication. Features a creator profile, subscriber management, premium content access, and integrated payment processing.



## Features

### For the Creator

- 🏠 Manage your creator profile with customizable details
- 📝 Create and publish posts with rich text formatting
- 🔒 Set content access levels based on membership tiers
- 💰 Manage pricing tiers and subscription options
- 🎨 Content management with a full authenticated admin dashboard

### For Subscribers

- 🖼️ Access premium content based on subscription tier
- 💬 Interact with creators through messages
- 💳 Seamless subscription management

### Technical Features

- 🚀 Server Components & Server Actions with Next.js 15
- 👤 Authentication with Clerk
- 📝 Content management with Sanity.io
- 💰 Payment processing & Subscriptions with Schematic
- 🎨 Modern UI with Tailwind CSS and Radix UI
- 📱 Responsive design
- 🔄 Real-time content updates
- 🔒 Protected routes and content
- ⚡ Turbopack for fast development

### UI/UX Features

- 🎯 Clean, Patreon-inspired interface
- 🎨 Consistent design system using Radix UI components
- ♿ Accessible components
- 📱 Responsive across all devices
- ⏱️ Time-ago timestamps for posts
- 🔍 Intuitive search functionality
- 💫 Micro-interactions for better engagement

## Getting Started

### Environment Variables

Create a `.env.local` file with:

```bash
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_SANITY_PROJECT_ID"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_ADMIN_TOKEN=YOUR_SANITY_API_TOKEN

# Schematic
SCHEMATIC_API_KEY=YOUR_SCHEMATIC_API_KEY
NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY=YOUR_SCHEMATIC_PUBLISHABLE_KEY
NEXT_PUBLIC_CUSTOMER_PORTAL_COMPONENT_ID=YOUR_CUSTOMER_PORTAL_COMPONENT_ID


```

### Installation

```bash
# Clone the repository

# Install dependencies using pnpm
pnpm install

# Start the development server with Turbopack
pnpm dev
```

### Core Technologies

- Next.js 15
- TypeScript
- Schematic
- Stripe
- Sanity CMS
- Clerk Auth
- Stripe Payments
- Tailwind CSS
- Shadcn

