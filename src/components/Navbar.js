import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Kevaat</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/student">For Class 12 Students</Link>
        </li>
        <li>
          <Link to="/mentor">For University Students</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
