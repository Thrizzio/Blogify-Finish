const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// import controller
const postController = require("../controllers/posts.controller");

// Validation rules for creating a post
const createPostRules = [
	body('title').notEmpty().withMessage('Title is required'),
	body('content').notEmpty().withMessage('Content is required')
];

// Routes
router.get("/", postController.getAllPosts);

router.get("/:postId", postController.getPostById);

router.post("/", createPostRules, postController.createPost);

// UPDATE POST
router.patch("/:postId", postController.updatePost);

// DELETE POST
router.delete("/:postId", postController.deletePost);

module.exports = router;