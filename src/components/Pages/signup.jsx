import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, provider, signInWithPopup } from './firebase'; // adjust the path
import './Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 🔐 Manual signup handler (if connected to backend)
  const handleSignup = async (e) => {
    e.preventDefault();
    // You can connect this with your backend or Firebase Email/Password auth
    alert(`Thanks for signing up, ${name}!`);
    navigate('/login');
  };

  // 🔵 Google sign-in handler
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert(`Welcome ${user.displayName}!`);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        alert('Google sign-in failed.');
      });
  };

  return (
    <div className="wrapper signUp">
      <div className="illustration">
        <img src="https://source.unsplash.com/random" alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form onSubmit={handleSignup}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {/* 🔵 Google Sign-in Button */}
        <h2 align="center" className="or">OR</h2>
        <button onClick={handleGoogleSignIn} className="google-btn">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
          />
          Sign in with Google
        </button>

        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
