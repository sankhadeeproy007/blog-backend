import express from 'express';

import {
  getComments,
  createComment
  // updateComment,
  // deleteComment
} from '../controllers/commentsController.js';

const router = express.Router();

router.get('/', getComments);
router.post('/create', createComment);
// router.patch('/update/:id', updateComment);
// router.delete('/delete/:id', deleteComment);

export default router;
