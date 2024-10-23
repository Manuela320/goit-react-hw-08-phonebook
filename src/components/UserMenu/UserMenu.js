import React, { useState, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { jwtDecode } from 'jwt-decode'; 
import styles from './UserMenu.module.css';

function UserMenu() {
  const { logout } = useAuth();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedUser = jwtDecode(token); 
        setCurrentUser(decodedUser);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    } else {
      setCurrentUser(null);
    }
  }, []); 

  return (
    <div className={styles.userMenu}>
      {currentUser ? (
        <>
          <p>{currentUser.email}</p>
          <button onClick={logout} className={styles.logoutButton}>Logout</button>
        </>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
}

export default UserMenu;