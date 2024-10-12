import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-subcontainer">
        <button className="home" type="button">
          HOME
        </button>
        <span>|</span>
        <button className="shop" type="button">
          SHOP
        </button>
      </div>
      <div className="navbar-subcontainer-tabdesk">
        <p className="link">SHOP</p>
        <p className="link">SKILLS</p>
        <p className="link">STORIES</p>
        <p className="link">ABOUT</p>
        <p className="link">CONTACT US</p>
      </div>
    </div>
  );
};

export default Navbar;
