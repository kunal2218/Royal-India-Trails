import { pool } from '../db.js';

export const getAllTours = async () => {
  const result = await pool.query('SELECT * FROM tours');
  return result.rows;
};

export const createTour = async (title, description, price) => {
  const result = await pool.query(
    'INSERT INTO tours (title, description, price) VALUES ($1, $2, $3) RETURNING *',
    [title, description, price]
  );
  return result.rows[0];
};