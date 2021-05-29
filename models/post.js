import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  coverImage: String,
  likes: {
    type: Number,
    default: 0
  },
  createdBy: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
});

const Post = mongoose.model('Post', postSchema);

export default Post;
