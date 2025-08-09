import React, { useContext } from "react";
import "./Navbar.scss";

import { ThemeContext } from "../../Context/ThemeContext";

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navContainer">
      <div className="navbar">
        <h1>Where in the world</h1>
        <button className="moodBtn" onClick={toggleTheme}>
          {theme === "dark" ? " ☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
