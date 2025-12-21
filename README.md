# SensAI - AI Career Coach 🚀This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


[![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)](https://nextjs.org/)## Getting Started

[![React](https://img.shields.io/badge/React-19-blue)](https://reactjs.org/)

[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)](https://www.prisma.io/)First, run the development server:

[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-316192)](https://www.postgresql.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)```bash

npm run dev

> Your intelligent AI-powered career development platform that helps you advance your professional journey with personalized insights, resume building, interview preparation, and more.# or

yarn dev

---# or

pnpm dev

## 📋 Table of Contents# or

bun dev

- [Overview](#overview)``

- [Features](#features)

- [Tech Stack](#tech-stack)Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- [Getting Started](#getting-started)

- [Environment Variables](#environment-variables)You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

- [Database Setup](#database-setup)

- [Project Structure](#project-structure)This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- [Key Features Explained](#key-features-explained)

- [API Routes](#api-routes)## Learn More

- [Contributing](#contributing)

- [License](#license)To learn more about Next.js, take a look at the following resources:



---- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## 🌟 Overview:

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

**SensAI** is an AI-powered career development platform designed to help professionals accelerate their career growth. It combines cutting-edge AI technology with industry-specific insights to provide personalized career guidance, intelligent resume building, adaptive interview preparation, and AI-generated cover letters.

## Deploy on Vercel

### Why SensAI?

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- 🎯 **Personalized**: Tailored to your industry, experience level, and career goals

- 🤖 **AI-Powered**: Leverages Google's Gemini AI for intelligent content generationCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

- 📊 **Data-Driven**: Provides industry insights, salary trends, and market analysis
- 🎨 **Modern UI**: Clean, responsive interface built with Next.js 15 and Tailwind CSS
- 🔒 **Secure**: Enterprise-grade authentication with Clerk

---

## ✨ Features

### 🎯 Core Features

1. **Intelligent Resume Builder**
   - Form-based and Markdown editor modes
   - Real-time preview
   - PDF export functionality
   - Auto-save capabilities

2. **AI Cover Letter Generator**
   - Job-specific cover letters
   - Industry-tailored content
   - Editable markdown output
   - Multiple cover letter management

3. **Adaptive Interview Preparation**
   - AI-generated interview questions
   - Performance tracking and analytics
   - Industry-specific question sets
   - Progress monitoring with charts

4. **Industry Insights Dashboard**
   - Real-time salary data
   - Market trends analysis
   - Growth rate indicators
   - In-demand skills tracking

5. **Personalized Onboarding**
   - Industry selection
   - Skills assessment
   - Experience level configuration
   - Professional bio creation

---

## 🛠 Tech Stack

### Frontend
- **Next.js 15.5.6** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable component library
- **MDEditor** - Markdown editor for resumes/cover letters
- **Recharts** - Data visualization
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend
- **Next.js Server Actions** - Server-side API handlers
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Primary database (Neon)
- **Clerk** - Authentication & user management

### AI & External Services
- **Google Gemini AI** - Content generation
- **Inngest** - Background job processing
- **html2pdf.js** - PDF generation

### Developer Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (or Neon account)
- Clerk account for authentication
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sensai.git
   cd sensai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@host:5432/sensai?sslmode=require"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key

   # Inngest (optional for background jobs)
   INNGEST_EVENT_KEY=your_inngest_event_key
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key | ✅ |
| `CLERK_SECRET_KEY` | Clerk secret key | ✅ |
| `GEMINI_API_KEY` | Google Gemini AI API key | ✅ |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Sign-in page URL | ✅ |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Sign-up page URL | ✅ |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect after sign-in | ✅ |
| `INNGEST_EVENT_KEY` | Inngest event key | ⚪ |
| `INNGEST_SIGNING_KEY` | Inngest signing key | ⚪ |

---

## 💾 Database Setup

### Using Neon (Recommended)

1. Create a free account at [Neon](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add it to your `.env` file as `DATABASE_URL`

### Using Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database:
   ```sql
   CREATE DATABASE sensai;
   ```
3. Update the `DATABASE_URL` in `.env`:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/sensai"
   ```

### Database Schema

The project uses Prisma with the following main models:

- **User** - User profiles with industry and experience data
- **Assessment** - Interview quiz results and scores
- **Resume** - Resume content and metadata
- **CoverLetter** - AI-generated cover letters
- **IndustryInsight** - Industry trends and salary data

---

## 📁 Project Structure

```
sensai/
├── actions/              # Server actions
│   ├── cover-letter.js
│   ├── dashboard.js
│   ├── interview.js
│   ├── resume.js
│   └── user.js
├── app/                  # Next.js app directory
│   ├── (auth)/          # Authentication routes
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/          # Main application routes
│   │   ├── dashboard/
│   │   ├── onboarding/
│   │   ├── resume/
│   │   ├── ai-cover-letter/
│   │   └── interview/
│   ├── api/             # API routes
│   ├── lib/             # Utilities and helpers
│   ├── globals.css
│   └── layout.js
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── header.jsx
│   └── hero.jsx
├── data/               # Static data
├── hooks/              # Custom React hooks
├── lib/                # Shared utilities
├── prisma/             # Database schema
│   ├── schema.prisma
│   └── migrations/
├── public/             # Static assets
├── .env               # Environment variables
├── package.json
└── README.md
```

---

## 🎨 Key Features Explained

### 1. Onboarding Flow

New users go through a personalized onboarding process:
- Select industry and specialization
- Input years of experience
- Add professional skills
- Write a brief bio

This information is used to personalize all AI-generated content.

### 2. Resume Builder

**Two Editing Modes:**
- **Form Mode**: Structured form with sections for contact info, summary, skills, experience, education, and projects
- **Markdown Mode**: Direct markdown editing with live preview

**Features:**
- Real-time preview updates
- PDF export with custom formatting
- Auto-save functionality
- Markdown syntax support

### 3. Cover Letter Generator

**Workflow:**
1. Enter job title, company name, and job description
2. AI generates a tailored cover letter based on your profile
3. Edit the generated content in markdown
4. Save or export as needed

### 4. Interview Preparation

**Features:**
- AI-generated interview questions based on your industry
- Multiple-choice quiz format
- Performance tracking and analytics
- Progress charts showing improvement over time
- Industry-specific question categories

### 5. Dashboard Insights

Real-time data visualization showing:
- Industry salary ranges by role
- Market growth rates
- Demand levels (High/Medium/Low)
- Top skills in your industry
- Recommended skills to learn
- Career outlook trends

---

## 🔌 API Routes

### Server Actions

All API interactions use Next.js Server Actions:

- `updateUser(data)` - Update user profile
- `generateCoverLetter(data)` - Generate AI cover letter
- `saveResume(content)` - Save resume content
- `generateAIInsights(industry)` - Get industry insights
- `getIndustryInsights()` - Fetch saved insights

### Inngest Background Jobs

- Weekly industry insights updates
- Automated data refresh
- AI content generation queues

---

## 🎯 Usage Examples

### Creating a Resume

```javascript
// Navigate to /resume
// Fill in the form or use markdown editor
// Preview in real-time
// Click "Save" to persist
// Click "Download PDF" to export
```

### Generating a Cover Letter

```javascript
// Navigate to /ai-cover-letter/new
// Enter job details
// AI generates personalized content
// Edit and save
```

### Taking Mock Interviews

```javascript
// Navigate to /interview/mock
// Select quiz category
// Answer questions
// View detailed results and tips
```

----

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic


## 👨‍💻 Author

**Md Ashad**

- GitHub: [@yourusername](https://github.com/mdashad0)

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.dev/) - Authentication
- [Prisma](https://www.prisma.io/) - Database ORM
- [Shadcn/ui](https://ui.shadcn.com/) - Component Library
- [Google Gemini](https://deepmind.google/technologies/gemini/) - AI Generation
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

## 📞 Support

For support, email support@sensai.com or open an issue on GitHub.

---

## 🗺 Roadmap

- [ ] Multi-language support
- [ ] LinkedIn integration
- [ ] Job board integration
- [ ] AI-powered skill gap analysis
- [ ] Career path recommendations
- [ ] Networking features
- [ ] Mobile app

---

<div align="center">
  <p>Made with ❤️ by Md Ashad</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
