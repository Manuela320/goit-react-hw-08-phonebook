import React, { useEffect, useState } from 'react';
import { getContacts } from '../../api';  

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');  

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsData = await getContacts(token); 
        setContacts(contactsData);  
      } catch (error) {
        setErrorMessage(error.message || 'Failed to fetch contacts.');
      }
    };

    if (token) {
      fetchContacts();  
    } else {
      setErrorMessage('No token found, please log in.');
    }
  }, [token]);

  return (
    <div>
      <h1>Your Contacts</h1>
      {errorMessage ? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name} - {contact.number}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contacts;