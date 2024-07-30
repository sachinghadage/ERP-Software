// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authServices';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
