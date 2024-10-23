
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from 'components/Register/Register';
import Login from 'components/Login/Login';
import Contacts from 'components/Contacts/Contacts';
import Navigation from 'components/Navigation/Navigation';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router basename="/goit-react-hw-08-phonebook">
      <Navigation />
      <Routes>
        {}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {}
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />

        {}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
