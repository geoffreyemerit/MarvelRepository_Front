import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          src="./assets/marvelLogo.png"
          alt="logo-geoffreyemerit"
          className="navbar__logoMarvel"
        />
      </NavLink>
      Repository
    </div>
  );
};

export default Navbar;
