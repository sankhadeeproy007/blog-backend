import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.send('Hello user'));

export default router;
