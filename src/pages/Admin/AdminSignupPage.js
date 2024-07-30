import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Admin/AdminSignupPage.css'; // Import the CSS file

const AdminSignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/signup', { email, password });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Signup error:', error);
      setMessage('Signup failed');
    }
  };

  return (
    <div className="signup-container">
      <h1>Admin Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminSignupPage;
