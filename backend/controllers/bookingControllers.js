
import { getAllBookings, createBooking, getBookingsForUser } from '../models/bookingModel.js';

export const getBookings = async (req, res) => {
  try {
    const bookings = await getAllBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get bookings' });
  }
};

export const addBooking = async (req, res) => {
  try {
    const { user_id, tour_id, date } = req.body;
    const booking = await createBooking(user_id, tour_id, date);
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

export const getBookingsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const bookings = await getBookingsForUser(userId);
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get bookings for user' });
  }
};
