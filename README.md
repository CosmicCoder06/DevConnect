# 📝 Dev-Blog

A full-stack developer blogging platform built with **Node.js**, **Express.js**, and **EJS** following the **MVC (Model-View-Controller)** architecture pattern. Developers can register, log in, create posts, and view a personalized dashboard.

> 🎓 Built as a personal project during my 2nd year of B.Tech CSE to learn backend web development and the MVC pattern.

---

## 📌 About the Project

Dev-Blog is a server-rendered web application where developers can share their thoughts and experiences through blog posts. This project was built to get hands-on experience with backend development — routing, authentication, middleware, and database modeling — all structured cleanly using the MVC pattern.

---

## ✨ Features

- 🔐 **User Authentication** — Register and login with secure session/token-based auth
- 📝 **Create Posts** — Write and publish blog posts
- 📋 **Dashboard** — View and manage your own posts
- 👁️ **Post View** — Read individual blog posts
- 🧩 **Reusable Layouts** — Shared header, navbar, and footer using EJS partials
- 🔒 **Protected Routes** — Middleware to guard authenticated-only pages

---

## 🏗️ MVC Architecture

```
DEV-BLOG/
│
├── config/                  # Configuration files (DB connection, etc.)
│
├── controllers/             # Controller layer — handles request logic
│   ├── authController.js    # Register, login, logout logic
│   └── postController.js    # Create, read, display post logic
│
├── middlewares/             # Custom middleware
│   └── authMiddleware.js    # Protects routes from unauthenticated access
│
├── models/                  # Model layer — database schemas
│   ├── User.js              # User schema
│   └── Post.js              # Post schema
│
├── routes/                  # Route definitions
│   ├── authRoutes.js        # /login, /register, /logout
│   └── postRoutes.js        # /posts, /posts/create, etc.
│
├── views/                   # View layer — EJS templates
│   ├── pages/
│   │   ├── login.ejs
│   │   ├── register.ejs
│   │   ├── dashboard.ejs
│   │   ├── createPost.ejs
│   │   └── post.ejs
│   └── partials/
│       ├── header.ejs
│       ├── navbar.ejs
│       ├── footer.ejs
│       └── layout.ejs
│
├── public/
│   └── css/
│       └── style.css        # Global stylesheet
│
├── utils/                   # Helper/utility functions
├── .env                     # Environment variables (not committed)
├── app.js                   # App setup and middleware registration
├── server.js                # Entry point — starts the server
└── package.json
```

---

## 🛠️ Tech Stack

| Layer        | Technology                    |
|--------------|-------------------------------|
| Runtime      | Node.js                       |
| Framework    | Express.js                    |
| Templating   | EJS (Embedded JavaScript)     |
| Database     | MongoDB + Mongoose            |
| Auth         | JWT / Express Sessions        |
| Styling      | CSS (custom)                  |
| Architecture | MVC (Model-View-Controller)   |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/CosmicCoder06/DevConnect.git
cd DevConnect
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret
```

### 4. Run the App

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

> App runs at `http://localhost:3000`

---

## 🔗 Routes Overview

| Method | Route             | Description                  | Auth Required |
|--------|-------------------|------------------------------|---------------|
| GET    | `/`               | Home / landing page          | ❌            |
| GET    | `/login`          | Login page                   | ❌            |
| POST   | `/login`          | Handle login form            | ❌            |
| GET    | `/register`       | Register page                | ❌            |
| POST   | `/register`       | Handle registration form     | ❌            |
| GET    | `/dashboard`      | User dashboard               | ✅            |
| GET    | `/posts/create`   | Create post page             | ✅            |
| POST   | `/posts/create`   | Submit new post              | ✅            |
| GET    | `/posts/:id`      | View a single post           | ❌            |
| GET    | `/logout`         | Logout user                  | ✅            |

---

## 🧠 What I Learned

- How to structure a Node.js app using the **MVC design pattern**
- Building and connecting **RESTful routes** with Express.js
- Creating **dynamic pages** with EJS templating and partials
- Writing **authentication middleware** to protect routes
- Designing **Mongoose schemas** for Users and Posts
- Managing **environment variables** securely with `.env`

---

## 📸 Screenshots

> *(Add screenshots of your app here — Login, Dashboard, Create Post, Post view)*

---

## 🔮 Future Plans

- [ ] Add edit and delete post functionality
- [ ] Add comments on posts
- [ ] Add profile pages for each user
- [ ] Deploy on Railway / Render

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**CosmicCoder06**
- GitHub: [@CosmicCoder06](https://github.com/CosmicCoder06)

---

> ⭐ If you liked this project, drop a star on the repo!
