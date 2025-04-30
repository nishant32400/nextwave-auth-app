import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './Register.css'; // We'll create a custom CSS file for futuristic effects

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    age: '',
    dob: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/users/register', data);
      alert('Registered Successfully!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Registration Failed');
    }
  };

  return (
    <div className="register-page">
      <div className="form-container glass-card p-5">
        <h2 className="text-center mb-4 futuristic-title">Register</h2>
        <form onSubmit={handleRegister} encType="multipart/form-data">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Company", name: "company", type: "text" },
            { label: "Age", name: "age", type: "number" },
            { label: "Date of Birth", name: "dob", type: "date" }
          ].map((field, idx) => (
            <div className="mb-3" key={idx}>
              <label className="form-label futuristic-label">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="form-control futuristic-input"
                placeholder={`Enter your ${field.label.toLowerCase()}`}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="mb-3">
            <label className="form-label futuristic-label">Profile Image</label>
            <input 
              type="file" 
              name="image" 
              className="form-control futuristic-input" 
              accept="image/png, image/jpeg" 
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn futuristic-btn w-100 mt-3">
            🚀 Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
