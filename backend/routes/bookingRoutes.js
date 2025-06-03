import express from 'express';
import { getBookings, addBooking } from '../controllers/bookingControllers.js';

const router = express.Router();

router.get('/', getBookings);
router.post('/', addBooking);

export default router;