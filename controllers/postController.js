const Post = require("../models/Post");

// ➕ Create Post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    await Post.create({
      title,
      content,
      author: req.user._id
    });

    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.send("Error creating post");
  }
};

// 📊 Get all posts (Dashboard)
exports.getPosts = async (req, res) => {
  try {
    console.log("getPosts called");
    
    // Fetch all posts from database
    const posts = await Post.find().populate("author");
    
    console.log("Posts fetched:", posts);
    
    // Render dashboard with posts
    res.render("pages/dashboard", { posts });
  } catch (error) {
    console.error("Error in getPosts:", error);
    res.status(500).render("pages/dashboard", { posts: [] });
  }
};