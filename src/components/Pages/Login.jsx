// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    try {
      const res = await axios.post('http://localhost:3001/login', {
        email,
        password
      });

      if (res.status === 200) {
        navigate('/dashboard'); // redirect after login
        alert("Login Successfull");
      }
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.message || 'Unknown error');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <p>Don't have an account? <a href='/signup'>Sign up</a></p>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
