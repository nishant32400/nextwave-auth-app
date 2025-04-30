import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OTP.css'; // We'll create this for custom styles

function OTP() {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    const email = localStorage.getItem('email');
    try {
      const res = await axios.post('http://localhost:5000/api/users/verify-otp', { email, otp });
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/thankyou');
    } catch (error) {
      navigate('/error');
    }
  };

  return (
    <div className="otp-page">
      <div className="glass-card p-5 text-center">
        <h2 className="futuristic-title mb-4">🔒 Enter OTP</h2>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          className="form-control futuristic-input mb-4"
          onChange={(e) => setOtp(e.target.value)}
        />
        <button 
          className="btn futuristic-btn w-50"
          onClick={handleVerify}
        >
          ✅ Verify OTP
        </button>
      </div>
    </div>
  );
}

export default OTP;
