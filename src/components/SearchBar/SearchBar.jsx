import React from "react";
import "./SearchBar.scss";
const SearchBar = () => {
  return (
    <div className="SearchBarContainer">
      <div className="search">
        <input type="text" />
        <span>🔍</span>
      </div>
      <select>
        <option value="Filter by Region">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchBar;
