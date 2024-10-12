import React from "react";
import { FaChevronDown } from 'react-icons/fa';
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <label>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
        <div className="hr"></div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">IDEAL FOR</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="content">
            <label>
                <input type="checkbox" /> Man
            </label>
            <label>
                <input type="checkbox" /> Woman
            </label>
            <label>
                <input type="checkbox" />   Baby & Kids
            </label>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">OCCASION</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">WORK</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">FABRIC</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">SEGMENT</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">SUITABLE FOR</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">RAW MATERIALS</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
        <div className="ideal-for">
            <div className="ideal">
            <p className="for">PATTERN</p>
            <p className="all">ALL</p>
            </div>
            
           <button className="arrow-button"> <FaChevronDown size={20} /></button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
