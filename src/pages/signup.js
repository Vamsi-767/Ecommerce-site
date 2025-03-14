// src/pages/SignUp.js

import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file for styling

const SignUp = () => {
  // State for the sign-up form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  // Handle input change for the sign-up form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle sign-up form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign-up Data:', formData);
    // Process the form submission (e.g., send to server)
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;