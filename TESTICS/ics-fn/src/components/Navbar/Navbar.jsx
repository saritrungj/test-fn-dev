import React from "react";
import UserImage from "../../assets/users-image.png";
import IcsBanner from "../../assets/ics-logo.png";
import { FaBell } from "react-icons/fa";
import { FaRegRectangleList } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        {/* Navbar */}
        <div className="navbar">
          <div className="users-box">
            <div className="users-notification">
              <div className="notification-icons">
                <FaBell size={18} />
                <div className="notification-badge">
                  <GoDotFill size={12} />
                </div>
              </div>
            </div>
            <div className="users-info">
              <img src={UserImage} alt="Users-image" />
              <p>Akkarapol</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="sidebar">
          <div className="placelist-box">
            <div className="placelist-item">
              <div className="logo-banner">
                <img src={IcsBanner} alt="banner" />
              </div>
            </div>
            <div className="placelist-item">
              <div className="place-menu">
                <a href="#">
                  <FaRegRectangleList />
                </a>
              </div>
              <p>Place</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
