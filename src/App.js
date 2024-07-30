import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProtectedRoute from './components/PrivateRoute';
import './styles/Auth.css';
import RoleSelectionPage from './pages/RoleSelectionPage';
import AdminSignupPage from './pages/Admin/AdminSignupPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
// import AdminPage from './pages/Admin/AdminPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RoleSelectionPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="adminsignup" element={<AdminSignupPage/>}/>
        <Route path="/adminlogin" element={<AdminLoginPage />} />
        {/* <Route
          path="/adminhome"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
