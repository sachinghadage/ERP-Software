// src/pages/HomePage.js
import React, { useState,useEffect } from 'react';
import authService from '../services/authServices';
import profileServices from '../services/profileServices';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import EditProfile from '../components/EditProfile';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = authService.getToken(); // Get the token from authService
        if (token) {
          const response = await profileServices.getProfile(token);
          setUserEmail(response.data.email); // Assuming the response contains an email field
        }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail();
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <h1>User Dashboard</h1>
        <div className="account-section">
          <button onClick={handleOpenModal} className="account-button">Account</button>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
      <div className="content">
        <section className="dashboard-section">
          <h2>Dashboard</h2>
          <div className="stats">
          <p>User email: {userEmail}</p>
            <p>More user stats or activities...</p>
          </div>
        </section>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <EditProfile onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default HomePage;
