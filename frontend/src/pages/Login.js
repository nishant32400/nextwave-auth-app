import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // New custom CSS for futuristic login

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', { email, password }); 
      localStorage.setItem('email', email);
      alert('OTP Sent: ' + res.data.otp);
      navigate('/otp');
    } catch (err) {
      console.error(err);
      navigate('/error');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container glass-card p-5">
        <h2 className="text-center mb-4 futuristic-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label futuristic-label">Email</label>
            <input 
              type="email" 
              className="form-control futuristic-input" 
              placeholder="Enter your email" 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label futuristic-label">Password</label>
            <input 
              type="password" 
              className="form-control futuristic-input" 
              placeholder="Enter your password" 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn futuristic-btn w-100 mt-3">
            🚀 Login
          </button>
        </form>
        <p className="text-center mt-3 text-light">
          Don't have an account? <a href="/register" className="futuristic-link">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
