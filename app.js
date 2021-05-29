import express from 'express';
import cors from 'cors';

import connectDB from './config/db.js';

import commentsRoutes from './routes/commentsRoutes.js';
import postsRoutes from './routes/postsRoutes.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/comments', commentsRoutes);
app.use('/posts', postsRoutes);

connectDB(app);
