import express from 'express';
import validator from 'express-validator';

import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
} from '../controllers/postsController.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/:id', getPostById);

const titleValidation = validator.body('title').trim().isLength({ min: 5 });
const bodyValidation = validator.body('body').isLength({ min: 15 });

// Add validation for post title
router.post('/create', [titleValidation, bodyValidation], createPost);
router.patch('/update/:id', [titleValidation, bodyValidation], updatePost);
router.delete('/delete/:id', deletePost);

export default router;
