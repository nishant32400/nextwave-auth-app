import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ErrorPage.css'; // Custom CSS for this page

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="glass-card p-5 text-center">
        <h2 className="futuristic-title mb-4">🚫 Sorry, we can't log you in.</h2>
        <button 
          className="btn futuristic-btn w-50"
          onClick={() => navigate('/')}
        >
          🔙 Back to Login
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
