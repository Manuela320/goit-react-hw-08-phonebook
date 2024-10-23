import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import styles from './Navigation.module.css'; 

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/register" className={styles.navLink}>Register</Link>
        <Link to="/login" className={styles.navLink}>Login</Link>
        <Link to="/contacts" className={styles.navLink}>Contacts</Link>
      </div>
      <div className={styles.userMenu}>
        <UserMenu />
      </div>
    </nav>
  );
}

export default Navigation;