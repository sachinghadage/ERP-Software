import React, { useState, useEffect } from 'react';
import profileServices from '../services/profileServices';
import authService from '../services/authServices';
import '../styles/EditProfile.css';

const EditProfile = ({ token, onClose }) => {
  const [profileData, setProfileData] = useState({
    fullname: '',
    email: '',
    username: '',
    panNo: '',
    role: 'User',
    userType: 'Standard'
  });
  const [editMode, setEditMode] = useState(false);
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = authService.getToken(); // Get the token from authService
        if (token) {
          const response = await profileServices.getProfile(token);
          setProfileData(response.data); // Assuming the response contains an email field
        }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserData();
  }, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = () => {
    setEditMode(true);
  };
  const handleSaveClick = async () => {
    try {
      const token = authService.getToken(); // Get the token from authService
      await profileServices.updateProfile(token, profileData);
      setEditMode(false);
      const updatedProfile = await profileServices.getProfile(token); // Fetch updated data
      setProfileData(updatedProfile.data); // Update state with the latest profile data
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleCancelClick = () => {
    setEditMode(false); // Exit edit mode
    onClose(); // Close the modal
  };

  return (
    <div className="edit-profile-container">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>Edit Profile</h2>
      <form>
        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            value={profileData.fullname}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>PAN No:</label>
          <input
            type="text"
            name="panNo"
            value={profileData.panNo}
            onChange={handleChange}
            disabled={!editMode}
          />
        </div>
        <div className="form-group">
          <label>Role:</label>
          <select
            name="role"
            value={profileData.role}
            onChange={handleChange}
            disabled={!editMode}
          >
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </div>
        <div className="form-group">
          <label>User Type:</label>
          <select
            name="userType"
            value={profileData.userType}
            onChange={handleChange}
            disabled={true}
          >
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        {editMode ? (
          <>
            <button type="button" onClick={handleSaveClick} className="save-button">Save</button>
            <button type="button" onClick={handleCancelClick} className="cancel-button">Cancel</button>
          </>
        ) : (
          <button type="button" onClick={handleEditClick} className="edit-button">Edit</button>
        )}
      </form>
    </div>
  );
};

export default EditProfile;
