import express from 'express';

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
router.post('/create', createPost);
router.patch('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);

export default router;
