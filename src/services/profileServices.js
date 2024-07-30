import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const profileServices = {
  getProfile: async (token) => {
    try {
      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  },

  updateProfile: async (token, profileData) => {
    try {
      const response = await axios.put(`${API_URL}/profile`, profileData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }
};

export default profileServices;
