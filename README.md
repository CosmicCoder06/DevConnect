# 📝 Dev-Blog

A developer blogging web app built with **Node.js**, **Express.js**, and **EJS** using the **MVC (Model-View-Controller)** architecture. Users can register, log in, create blog posts, and view them on a dashboard.

> 🎓 Built as a personal project during my 2nd year of B.Tech CSE to learn backend development, authentication, and the MVC pattern.

---

## ⚠️ Project Status

This project is a **work in progress**. Core auth and post creation are functional. Some features like the dashboard post listing and individual post view are still being completed.

---

## ✨ What Actually Works

- 📝 **Register** — Create an account (name, email, password)
- 🔐 **Login / Logout** — JWT-based auth stored in HTTP-only cookies
- ✍️ **Create Post** — Write a blog post with a title and content
- 🔒 **Protected Routes** — Dashboard and create post are only accessible when logged in
- 🧭 **Dynamic Navbar** — Shows different links depending on login state

---

## 🛠️ Tech Stack

| Purpose        | Technology          |
|----------------|---------------------|
| Runtime        | Node.js             |
| Framework      | Express.js          |
| Templating     | EJS                 |
| Database       | MongoDB + Mongoose  |
| Auth           | JWT (jsonwebtoken)  |
| Password Hash  | bcryptjs            |
| Cookie Parsing | cookie-parser       |
| Config         | dotenv              |

---

## 🏗️ Project Structure (MVC)

```
DEV-BLOG/
│
├── controllers/
│   ├── authController.js     # register & login logic
│   └── postController.js     # create post logic
│
├── middlewares/
│   └── authMiddleware.js     # JWT verification — protects private routes
│
├── models/
│   ├── User.js               # User schema (name, email, password, bio)
│   └── Post.js               # Post schema (title, content, author, createdAt)
│
├── routes/
│   ├── authRoutes.js         # POST /api/auth/register & /api/auth/login
│   └── postRoutes.js         # POST /api/posts
│
├── views/
│   ├── layout.ejs            # Base HTML layout
│   ├── pages/
│   │   ├── login.ejs
│   │   ├── register.ejs
│   │   ├── dashboard.ejs     # (in progress)
│   │   ├── createPost.ejs
│   │   └── post.ejs
│   └── partials/
│       └── navbar.ejs        # Dynamic navbar (logged in vs logged out)
│
├── public/
│   └── css/style.css
│
├── app.js                    # Express setup, DB connection, all routes
├── server.js                 # Entry point — starts the server
└── .env                      # Secret keys (not committed to git)
```

---

## 🔗 Routes

| Method | Route                  | Description              | Auth Required |
|--------|------------------------|--------------------------|---------------|
| GET    | `/`                    | Redirects to `/login`    | ❌            |
| GET    | `/login`               | Login page               | ❌            |
| POST   | `/api/auth/login`      | Handles login form       | ❌            |
| GET    | `/register`            | Register page            | ❌            |
| POST   | `/api/auth/register`   | Handles register form    | ❌            |
| GET    | `/dashboard`           | View all posts           | ✅            |
| GET    | `/posts/create`        | Create post page         | ✅            |
| POST   | `/api/posts`           | Submit new post          | ✅            |
| GET    | `/logout`              | Clears cookie, logs out  | ❌            |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

### 1. Clone the repo

```bash
git clone https://github.com/CosmicCoder06/DevConnect.git
cd DevConnect
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run the app

```bash
# With auto-restart (recommended)
npm run dev

# Or normally
node server.js
```

> App runs at `http://localhost:5000`

---

## 🔐 How Authentication Works

1. User registers → password is **hashed with bcrypt** before saving to DB
2. User logs in → bcrypt compares the password → if correct, a **JWT token** is created
3. Token is stored in an **HTTP-only cookie** (not accessible by JavaScript — more secure)
4. On every protected route, the `protect` middleware reads the cookie, verifies the token, fetches the user from DB, and attaches them to `req.user`
5. Logout simply **clears the cookie**

---

## 🧠 What I Learned

- Structuring a Node.js app with the **MVC pattern**
- How **JWT authentication** works end-to-end
- Why passwords must be **hashed** (never stored as plain text)
- Using **middleware** to protect routes
- Rendering dynamic pages with **EJS templates and partials**
- Connecting Express to **MongoDB using Mongoose**

---

## 🔮 Things Left To Do

- [ ] Fix dashboard to properly display all posts
- [ ] Add individual post view page (`/posts/:id`)
- [ ] Add delete/edit post functionality
- [ ] Add proper error pages
- [ ] Style the UI properly
- [ ] Deploy on Render or Railway

---

## 👨‍💻 Author

**CosmicCoder06** — [@CosmicCoder06](https://github.com/CosmicCoder06)
