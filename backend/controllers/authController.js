import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail } from '../models/userModel.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await findUserByEmail(email);
  if (existingUser) return res.status(400).json({ message: 'User exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = await createUser(name, email, hashed);
  res.status(201).json({ user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token, user });
};