import express from 'express';
import validator from 'express-validator';

import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);

// Add validation for post title
router.post(
  '/create',
  [validator.body('title').trim().isLength({ min: 5 })],
  createPost
);
router.patch('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

export default router;
