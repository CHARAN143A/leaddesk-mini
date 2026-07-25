# LeadDesk Mini CRM

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black)

A full-stack Lead Management (Mini CRM) application built using **Next.js**, **Prisma**, **Supabase PostgreSQL**, and **NextAuth**.

---

# Project Overview

LeadDesk Mini CRM allows potential customers to submit their details through a public landing page.

Administrators can securely log in to an admin dashboard to:

- View all submitted leads
- Search leads
- Update lead status
- Manage customer enquiries

The project demonstrates modern full-stack development using the Next.js App Router with secure authentication and database integration.

---

# Live Demo

https://leaddesk-mini-n2qzn1zs8-a-charan-s-projects.vercel.app/

---

# GitHub Repository

https://github.com/CHARAN143A/leaddesk-mini

---

# Features

## Public Landing Page

- Responsive UI
- Lead Capture Form
- React Hook Form Validation
- Zod Schema Validation
- Stores leads in Supabase PostgreSQL
- Success/Error handling

---

## Admin Dashboard

- Secure Login using NextAuth Credentials
- Protected Routes
- JWT Authentication
- View all submitted leads
- Search leads by Name or Email
- Update Lead Status
- Responsive Dashboard

---

# Tech Stack

| Technology | Purpose |
|------------|----------|
| Next.js 16 | Frontend + Backend |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Prisma ORM | Database ORM |
| Supabase PostgreSQL | Database |
| NextAuth | Authentication |
| React Hook Form | Form Handling |
| Zod | Validation |
| bcryptjs | Password Hashing |
| Vercel | Deployment |

---

# Folder Structure

```
app/
│
├── admin/
├── api/
│   ├── auth/
│   └── leads/
│
├── login/
│
components/
│
lib/
│
prisma/
│
public/
│
README.md
```

---

# Project Architecture

```
                    USER
                      │
                      ▼
              Landing Page (/)
                      │
                      ▼
             Fill Lead Form
                      │
                      ▼
       React Hook Form + Zod Validation
                      │
                      ▼
          POST /api/leads (API Route)
                      │
                      ▼
                 Prisma ORM
                      │
                      ▼
        Supabase PostgreSQL Database
                      │
────────────────────────────────────────────
                      ▲
                      │
                Admin Login
                      │
                      ▼
           NextAuth Authentication
                      │
                      ▼
             JWT Session Created
                      │
                      ▼
             Admin Dashboard
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
 Search Leads               Update Status
        │                           │
        └─────────────┬─────────────┘
                      ▼
            Prisma ORM Updates DB
```

---

# API Endpoints

## Create Lead

```
POST /api/leads
```

Stores a new lead in the database.

---

## Update Lead Status

```
PATCH /api/leads/[id]
```

Updates the status of an existing lead.

---

## Authentication

```
POST /api/auth/*
```

Handled automatically by NextAuth.

---

# Installation

Clone the repository

```bash
git clone https://github.com/CHARAN143A/leaddesk-mini.git
```

Move into the project folder

```bash
cd leaddesk-mini
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
DATABASE_URL=your_database_connection_string

NEXTAUTH_SECRET=your_secret_key

NEXTAUTH_URL=http://localhost:3000
```

Generate Prisma Client

```bash
npx prisma generate
```

Run database migrations

```bash
npx prisma migrate dev
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Authentication

Authentication is implemented using **NextAuth Credentials Provider**.

- JWT Session Strategy
- Protected Admin Dashboard
- bcrypt Password Hashing
- Secure Login Flow

---

# Database

The application uses **Supabase PostgreSQL**.

Prisma ORM is responsible for:

- Creating Leads
- Reading Leads
- Updating Status
- Database Queries

---

# Deployment

The project is deployed on **Vercel**.

---

# Screenshots

## Landing Page

![Landing Page](screenshots/LD-screenshot-1.png)
---

## Admin Login

![Admin Login](screenshots/LD-screenshot-2.png)

---

## Admin Dashboard

![Admin Dashboard](screenshots/LD-screenshot-3.png)

---

# Future Improvements

- Dashboard Analytics
- Email Notifications
- Lead Filtering
- Pagination
- Export Leads to CSV
- Role-based Authentication
- Dark Mode
- Dashboard Charts
- Delete Lead Feature

---

# Learning Outcomes

This project helped in understanding:

- Next.js App Router
- Prisma ORM
- PostgreSQL Integration
- NextAuth Authentication
- React Hook Form
- Zod Validation
- REST API Development
- CRUD Operations
- Secure Password Hashing
- Full-stack Deployment on Vercel

---

# Author

**Anti Charan**

- GitHub: https://github.com/CHARAN143A
- LinkedIn: https://www.linkedin.com/in/anti-charan-807s460/

---

⭐ If you found this project useful, consider giving it a star on GitHub.