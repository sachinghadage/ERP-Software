import React, { useState } from 'react';


const AuthForm = ({ onSubmit, formType }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate the form fields
  const validate = () => {
    const newErrors = {};
    if (formType === 'signup') {
      if (!formData.username) newErrors.username = 'Username is required';
      if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    }
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formType === 'signup' && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit(formData); // Call the onSubmit function passed as a prop
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>{formType === 'signup' ? 'Signup' : 'Login'}</h2>
      {formType === 'signup' && (
        <>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p className="error">{errors.username}</p>}
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </>
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}
      {formType === 'signup' && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      )}
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}
      <button type="submit">{formType === 'signup' ? 'Signup' : 'Login'}</button>
    </form>
  );
};

export default AuthForm;
