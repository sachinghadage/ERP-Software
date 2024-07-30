import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import authService from '../../services/authServices';

const SignupPage = () => {
    const navigate = useNavigate();
  const handleSignup = async (formData) => {
    try {
      await authService.signup(formData);
      navigate('/login');
      console.log('Signup successful');
      // Redirect or show success message
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle signup error, e.g., show error message
    }
  };

  return (
    <div className="auth-page">
      <AuthForm onSubmit={handleSignup} formType="signup" />
      <p className="auth-redirect">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default SignupPage;
