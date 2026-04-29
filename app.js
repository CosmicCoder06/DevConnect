require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const { protect } = require("./middlewares/authMiddleware");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);


app.get("/", (req, res) => res.redirect("/login"));
app.get("/login", (req, res) => res.render("pages/login"));
app.get("/register", (req, res) => res.render("pages/register"));

const postController = require("./controllers/postController");


app.get("/dashboard", protect, async (req, res) => {
  try {
    const Post = require("./models/Post");
    const posts = await Post.find().populate("author");
    console.log("Dashboard route - Posts:", posts);
    res.render("pages/dashboard", { posts });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.render("pages/dashboard", { posts: [] });
  }
});

app.get("/posts/create", protect, (req, res) => {
  res.render("pages/createPost");
});


app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/login");
});

module.exports = app;