import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import connectDB from './config/db.js';

import commentsRoutes from './routes/commentsRoutes.js';
import postsRoutes from './routes/postsRoutes.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/comments', commentsRoutes);
app.use('/posts', postsRoutes);

connectDB(app);
