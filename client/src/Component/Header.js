import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [user, setUser] = useState(null); // State to store user information

  useEffect(() => {
    // Fetch user profile information when the component mounts
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch('http://localhost:4300/profile', {
        credentials: 'include',
      });

      if (response.ok) {
        const user = await response.json();
        setUser(user);
      } else {
        // Handle the case when the user is not authenticated
        setUser(null);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <div>
      <header>
        <Link to="/" className="logo">
          MyBlog
        </Link>
        <nav className="anch">
          {user ? (
            // If a user is authenticated, show a logout link
            <Link to="/logout">Logout</Link>
          ) : (
            // If no user is authenticated, show login and register links
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
