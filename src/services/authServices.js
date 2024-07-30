import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

const authService = {
  signup: async (formData) => {
    const response = await axios.post(`${API_URL}/signup`, formData);
    return response.data;
  },
  login: async (formData) => {
    const response = await axios.post(`${API_URL}/login`, formData);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  getCurrentUser: () => {
    return localStorage.getItem('token');
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
  getToken : () => {
    return localStorage.getItem('token'); // Adjust this if you're storing the token elsewhere
  }
  
};


export default authService;
