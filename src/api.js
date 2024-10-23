import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

// Funcția de autentificare a utilizatorului
export const loginUser = async (email, password) => {
  try {
    console.log("Sending login request with:", { email, password });
    const response = await axios.post(`${API_URL}/users/login`, 
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    return response.data; // Returnăm direct datele din răspuns
  } catch (error) {
    if (error.response) {
      console.error('Login error (status):', error.response.status);
      console.error('Login error (data):', error.response.data);
      throw new Error(error.response.data.message || 'Login failed.');
    } else {
      console.error('Login error (message):', error.message);
      throw new Error('Login failed. Please try again.');
    }
  }
};

// Funcția de înregistrare a utilizatorului
export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, 
      { name, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
    return response.data; // Returnăm direct datele din răspuns
  } catch (error) {
    if (error.response) {
      console.error('Registration error (status):', error.response.status);
      console.error('Registration error (data):', error.response.data);
      if (error.response.data.code === 11000) {
        throw new Error('This email is already registered.');
      } else {
        throw new Error(error.response.data.message || 'Registration failed.');
      }
    } else {
      console.error('Registration error (message):', error.message);
      throw new Error('Registration failed. Please try again.');
    }
  }
};

// Funcția pentru preluarea contactelor
export const getContacts = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/contacts`, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data; // Returnăm direct datele din răspuns
  } catch (error) {
    console.error('Error fetching contacts:', error.response ? error.response.data : error.message);
    throw new Error('Failed to fetch contacts.');
  }
};

// Funcția pentru adăugarea unui nou contact
export const addContact = async (token, name, number) => {
  try {
    const response = await axios.post(`${API_URL}/contacts`, 
      { name, number },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
    return response.data; // Returnăm direct datele din răspuns
  } catch (error) {
    console.error('Error adding contact:', error.response ? error.response.data : error.message);
    throw new Error('Failed to add contact.');
  }
};