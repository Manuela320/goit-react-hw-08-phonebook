import React, { useState } from 'react';
import { loginUser } from '../../api';  
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await loginUser(email, password);  
      localStorage.setItem('token', response.token);  
      navigate('/contacts');  
    } catch (error) {
      setErrorMessage(error.message || 'Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}  {} 
    </form>
  );
}

export default Login;