import React from "react";
import "./BackBar.scss";
import { Link, useNavigate } from "react-router-dom";
const BackBar = () => {
  const navigate = useNavigate();

  return (
    <div className="backContainer">
      <Link className="backBtn" onClick={() => navigate(-1)}>
        Previos Page
      </Link>
      <Link to="/" className="backBtn">
        Back To Home
      </Link>
    </div>
  );
};

export default BackBar;
