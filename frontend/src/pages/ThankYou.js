import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ThankYou.css'; // 👈 Custom CSS we'll create

function ThankYou() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/delete/${user.email}`);
      alert('Account Deleted');
      localStorage.clear();
      navigate('/');
    } catch (error) {
      alert('Error deleting account');
    }
  };

  return (
    <div className="thankyou-page">
      <div className="glass-card text-center p-5">
        <h1 className="futuristic-title mb-4">Thank You, {user.name}!</h1>
        <img
          src={`http://localhost:5000/${user.image}`}
          alt="Profile"
          className="rounded-circle mb-4 profile-img"
        />
        <div className="text-light mb-3">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Date of Birth:</strong> {new Date(user.dob).toDateString()}</p>
        </div>
        <button
          onClick={handleDelete}
          className="btn futuristic-btn w-75"
        >
          🗑️ Remove Account
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
