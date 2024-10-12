import React from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./header.css";
import { useGlobalContext } from "../context/contextAPI";
import Navbar from "../navbar/Navbar";
const Header = () => {
    
  return (
    <div className="header">
      <div className="header-sub">
        <div className="menu-icon-container">
          <div className="menu-button">
            <div className="burger-icon"></div>
            <div className="burger-icon"></div>
            <div className="burger-icon"></div>
          </div>
          <div className="icon"></div>
        </div>
        <h1 className="logo">LOGO</h1>
        <div className="search-like-cart-icons">
          <div className="search">
            <AiOutlineSearch  className="header-icons" />
          </div>
          <div className="heart">
            <AiOutlineHeart  className="header-icons"/>
          </div>
          <div className="heart">
            <HiOutlineShoppingBag  className="header-icons"/>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;