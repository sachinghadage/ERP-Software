import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RoleSelectionPage.css'; // Create this file to style your page if needed

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleUserClick = () => {
    navigate('/signup');
  };

  const handleAdminClick = () => {
    navigate('/adminsignup');
  };

  return (
    <div className="role-selection-container">
      <h1>Select Your Role</h1>
      <button onClick={handleUserClick} className="user-button">User Signup</button>
      <button onClick={handleAdminClick} className="admin-button">Admin Signup</button>
    </div>
  );
};

export default RoleSelectionPage;
