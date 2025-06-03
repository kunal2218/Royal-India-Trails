import db from '../db.js';

export const getAllBookings = async () => {
  const result = await db.query('SELECT * FROM bookings');
  return result.rows;
};

export const createBooking = async (userId, tourId, date) => {
  const result = await db.query(
    'INSERT INTO bookings (user_id, tour_id, date) VALUES ($1, $2, $3) RETURNING *',
    [userId, tourId, date]
  );
  return result.rows[0];
};

export const getBookingsForUser = async (userId) => {
  const result = await db.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
  return result.rows;
};