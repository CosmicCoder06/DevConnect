const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, postController.createPost);

module.exports = router;