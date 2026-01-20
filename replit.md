# La Kou'm - Caribbean & Latinx Community Website

## Project Overview
A community website providing visibility and representation for the Caribbean and Latinx community in Pennsylvania. Features newsletter subscription, resources, events, and a community blog.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: Wouter (client-side)

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Header, Footer, Layout
│   │   │   └── ui/         # shadcn components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── routes.ts           # API endpoints
│   ├── storage.ts          # Database operations
│   └── db.ts               # Database connection
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Drizzle schema definitions
└── migrations/             # Database migrations
```

## Pages
1. **Home** (`/`) - Hero section, community stats, features overview, testimonials
2. **Newsletter** (`/newsletter`) - Newsletter subscription with benefits
3. **Resources** (`/resources`) - Downloadable guides, templates, and videos
4. **Events** (`/events`) - Upcoming and past community events
5. **Blog** (`/blog`) - Community articles and stories

## API Endpoints
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/subscribers` - Get all subscribers (admin)
- `POST /api/inquiries` - Submit a contact inquiry
- `GET /api/inquiries` - Get all inquiries (admin)

## Database Tables
- `subscribers` - Stores newsletter email subscriptions
- `inquiries` - Stores contact form submissions (for future use)

## Running Locally
```bash
npm install
npm run dev
```

## Environment Variables Required
- `DATABASE_URL` - PostgreSQL connection string
- `VITE_GA_MEASUREMENT_ID` - Google Analytics Measurement ID (optional, for analytics)

---

## GitHub Migration Guide

### Step 1: Export the Code from Replit

1. **Download as ZIP**: 
   - Click the three dots menu in the Files panel
   - Select "Download as zip"

2. **Or use Git** (if you have git connected):
   ```bash
   git remote add github https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push github main
   ```

### Step 2: Set Up GitHub Repository

1. Create a new repository on GitHub
2. Clone it locally or upload the files

### Step 3: Configure for Local/Production Deployment

Create a `.env` file based on the environment variables:

```env
DATABASE_URL=postgresql://username:password@host:5432/database
SESSION_SECRET=your-secret-key-here
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Optional
```

### Step 4: Database Setup

The project uses PostgreSQL. You'll need to:

1. **Set up a PostgreSQL database** (options):
   - Local PostgreSQL installation
   - Neon (https://neon.tech) - Free tier available
   - Supabase (https://supabase.com) - Free tier available
   - Railway (https://railway.app)
   - AWS RDS, Google Cloud SQL, Azure Database

2. **Run database migrations**:
   ```bash
   npm run db:push
   ```

### Step 5: Deployment Options

**Vercel** (recommended for this stack):
```bash
npm install -g vercel
vercel
```
- Set environment variables in Vercel dashboard
- Connect your PostgreSQL database

**Railway**:
- Connect GitHub repo
- Add PostgreSQL plugin
- Environment variables are auto-configured

**Render**:
- Create a new Web Service
- Connect GitHub repo
- Add PostgreSQL database
- Set environment variables

**DigitalOcean App Platform**:
- Connect GitHub
- Add PostgreSQL component
- Configure env vars

### Step 6: Post-Migration Checklist

- [ ] Database connected and schema pushed
- [ ] Environment variables configured
- [ ] Newsletter subscription working
- [ ] Google Analytics configured (when ready)
- [ ] Custom domain configured (optional)

### Files to Exclude from Version Control

Ensure your `.gitignore` includes:
```
node_modules/
.env
*.log
dist/
```

---

## Recent Changes
- January 2026: Restructured website for La Kou'm with 5 pages (Home, Newsletter, Resources, Events, Blog)
