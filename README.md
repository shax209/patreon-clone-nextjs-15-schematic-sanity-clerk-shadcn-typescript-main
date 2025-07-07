# Patreon Clone - Next.js 15 & Sanity CMS

A modern, membership platform built with Next.js 15, Sanity CMS, and Clerk authentication. Features a creator profile, subscriber management, premium content access, and integrated payment processing.

## Things to do before you start

#### Support the Project

When you sign up for services using our affiliate links, you help support the continued development of project's like these at no extra cost to you:

- 1️⃣ Get Started with Sanity 👉 https://www.sanity.io/sonny?utm_source=youtube&utm_medium=video&utm_content=patreon

- 2️⃣ Get Started with Clerk 👉 https://go.clerk.com/buyiIeO

- 3️⃣ Get Started with Schematic 👉 https://schematichq.com/papareact?utm_source=youtube&utm_campaign=sonny_20250507

These partnerships allow us to maintain this project while keeping it free and open source.
Thank you for your support!

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

## Join the World's Best Developer Course & Community Zero to Full Stack Hero! 🚀

### Want to Master Modern Web Development?

This project was built as part of the [Zero to Full Stack Hero](https://www.papareact.com/course) course. Join thousands of developers and learn how to build projects like this and much more!

#### What You'll Learn:

- 📚 Comprehensive Full Stack Development Training
- 🎯 50+ Real-World Projects
- 🤝 Access to the PAPAFAM Developer Community
- 🎓 Weekly Live Coaching Calls
- 🤖 AI & Modern Tech Stack Mastery
- 💼 Career Guidance & Interview Prep

#### Course Features:

- ⭐ Lifetime Access to All Content
- 🎯 Project-Based Learning
- 💬 Private Discord Community
- 🔄 Regular Content Updates
- 👥 Peer Learning & Networking
- 📈 Personal Growth Tracking

[Join Zero to Full Stack Hero Today!](https://www.papareact.com/course)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

---

Built with ❤️ using Next.js, Sanity, Clerk, and Stripe
