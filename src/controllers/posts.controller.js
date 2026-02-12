const { validationResult } = require('express-validator');

const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "Route handled by postController.getAllPosts"
    }
  });
};

const getPostById = (req, res) => {
  const { postId } = req.params;
  res.status(200).json({
    success: true,
    data: {
      message: `Route handled by postController.getPostById for id ${postId}`
    }
  });
};

const createPost = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  const { title, content } = req.body;

  res.status(201).json({
    success: true,
    data: {
      id: 'new-post-id',
      title,
      content,
      message: 'Post created (mock)'
    }
  });
};


module.exports = {
  getAllPosts,
  getPostById,
  createPost,
};