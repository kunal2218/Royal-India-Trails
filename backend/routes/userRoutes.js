import express from 'express';
import { listUsers } from '../controllers/userControllers.js'; // <-- Corrected filename

const router = express.Router();

router.get('/', listUsers);

export default router;
