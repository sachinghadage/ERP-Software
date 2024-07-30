import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import AuthForm from './AuthForm';
import authService from '../../services/authServices';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = async (formData) => {
    try {
      await authService.login(formData);
      console.log('Login successful');
      navigate("/home")
    
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error, e.g., show error message
    }
  };

  return (
    <div className="auth-page">
      <AuthForm onSubmit={handleLogin} formType="login" />
      <p className="auth-redirect">
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
