import mongoose from 'mongoose';
import validator from 'express-validator';

import PostModel from '../models/post.js';

export const getPosts = async (req, res) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPageCount = parseInt(req.query.count) || 2;

  try {
    const count = await PostModel.countDocuments();

    // Pagination based on query params
    const posts = await PostModel.find()
      .skip((currentPage - 1) * perPageCount)
      .limit(perPageCount);
    res.status(200).json({ posts, count });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPostById = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const post = await PostModel.findById(_id).populate('comments');
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  // Check if there are errors with post body
  const validationErrors = validator.validationResult(req);

  if (validationErrors.errors.length > 0) {
    res
      .status(400)
      .json({ message: 'Invalid input', error: validationErrors.errors });
    return;
  }

  const newPost = new PostModel(req.body);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;

  // If id doesn't exist return with error
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: 'No post with given ID found' });

  const validationErrors = validator.validationResult(req);

  if (validationErrors.errors.length > 0) {
    res
      .status(400)
      .json({ message: 'Invalid input', error: validationErrors.errors });
    return;
  }

  try {
    const updatedPost = await PostModel.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  // If id doesn't exist return with error
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: 'No post with given ID found' });

  try {
    await PostModel.findByIdAndRemove(_id);
    res.status(200).json({ message: 'Deleted post succesffully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
