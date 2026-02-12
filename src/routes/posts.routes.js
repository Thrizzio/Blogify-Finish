const express = require("express");
const router = express.Router();
const { body } = require('express-validator');

// import controller
const postController = require("../controllers/posts.controller");

// Validation rules for creating a post
const createPostRules = [
	body('title').notEmpty().withMessage('Title is required'),
	body('content').notEmpty().withMessage('Content is required')
];

// use controller instead of inline logic
router.get("/", postController.getAllPosts);
router.get("/:postId", postController.getPostById);
router.post("/", createPostRules, postController.createPost);

module.exports = router;