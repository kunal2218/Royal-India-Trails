import { getAllTours as fetchToursFromDB, createTour } from '../models/tourModel.js';

export const getAllTours = async (req, res) => {
  try {
    const tours = await fetchToursFromDB(); // Call DB function
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get tours' });
  }
};

export const getTourById = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to get tour by ID' });
  }
};
