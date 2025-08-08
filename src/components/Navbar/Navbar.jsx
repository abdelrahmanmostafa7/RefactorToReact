import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="navbar">
        <h1>Where in the world</h1>
        <button className="moodBtn">🌓 Dark Mode</button>
      </div>
    </div>
  );
};

export default Navbar;
