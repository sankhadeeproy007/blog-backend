import mongoose from 'mongoose';

import CommentModel from '../models/comment.js';
import PostModel from '../models/post.js';

export const createComment = async (req, res) => {
  const newComment = new CommentModel(req.body);
  try {
    // Create new comment
    await newComment.save();
    // Get post with given postId
    const post = await PostModel.findById({ _id: newComment.postId });
    // Push comment to relevant post
    post.comments.push(newComment);
    // Save updated post
    await post.save();
    res.status(201).json({ message: 'Comment created' });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
