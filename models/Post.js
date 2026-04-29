const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    name: String,
    id: mongoose.Schema.Types.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    console.log("Fetched posts:", posts); 
    res.render("pages/dashboard", { posts });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Server Error");
  }
};