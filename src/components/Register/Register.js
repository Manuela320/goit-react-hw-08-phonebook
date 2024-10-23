import React, { useState } from 'react';
import { registerUser } from '../../api';  // Importă funcția din api.js
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(name, email, password);  // Apelează registerUser din api.js
      navigate('/login');  // Redirecționează la pagina de login după înregistrare
    } catch (error) {
      setErrorMessage(error.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button type="submit">Register</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}  {/* Afișează mesajul de eroare */}
    </form>
  );
}

export default Register;