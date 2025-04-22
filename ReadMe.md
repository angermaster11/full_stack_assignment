# 🔐 Full Stack Auth App (Register, Login, Dashboard)

This is a simple full-stack authentication app using:

- **Frontend:** React + TypeScript + TailwindCSS
- **Backend:** Node.js + Express + TypeScript + Prisma + JWT
- **Database:** SQLite (via Prisma ORM)

- **GDrive-Video:** ``` https://drive.google.com/file/d/1x-fLIKS6MSiMC1_T8a1thtPjTnIhdYEw/view?pli=1 ```

---

## 🚀 Features

- 🔐 JWT-based Login & Register
- 🧠 Protected Dashboard with middleware
- 🧼 Form validation & error messages
- 🎨 Responsive, clean UI with TailwindCSS
- 💾 Secure password hashing (bcrypt)
- 📦 Modular backend structure with TypeScript

---

## 📦 Dependencies

### 🔙 Backend

| Package            | Purpose                        |
|--------------------|--------------------------------|
| express            | API framework                  |
| bcryptjs           | Password hashing               |
| jsonwebtoken       | JWT token handling             |
| prisma             | ORM for database               |
| dotenv             | Environment variable support   |
| typescript         | Type checking                  |
| ts-node-dev        | Auto restart server in dev     |

### 🔮 Dev Dependencies

- `@types/express`
- `@types/node`
- `@types/jsonwebtoken`
- `@types/bcryptjs`

---

### 🔮 Frontend

| Package              | Purpose                    |
|----------------------|----------------------------|
| react-router-dom     | Routing                    |
| axios                | HTTP requests              |
| tailwindcss          | Styling                    |
| zod + react-hook-form| Form validation            |
| vite                 | Frontend dev environment   |

---

## 🛠️ Getting Started

### 🔙 Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Initialize Prisma and DB
npx prisma migrate dev --name init

# Start development server
npm run dev
```

### 🔙 Frontend Setup

```bash
cd frontend

# Start development server
npm run dev
```


### 🔐 ENV Setup

Add in root directory of backend

```bash
cd backend
```
##.env
```bash 
PORT=5000
JWT_SECRET=supersecretkey123

```
