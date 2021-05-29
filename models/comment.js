import mongoose from 'mongoose';

const commentSchema = mongoose.Schema(
  {
    body: { type: String, required: true },
    createdBy: String,
    createdAt: {
      type: Date,
      default: new Date()
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true
    }
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
