import React from "react";
import "./NavbarStyles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar__logo" src="/img/logo.png" />
      <ul className="navbar__items">
        <li className="navbar__items--link">Projects</li>
        <li className="navbar__items--link">Services</li>
        <li className="navbar__items--link">Blog</li>
        <li className="navbar__items--link">About Us</li>
        <li className="navbar__items--link">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
