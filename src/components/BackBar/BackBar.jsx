import React from 'react'
import "./BackBar.scss"; 
import { Link } from 'react-router-dom';
const BackBar = () => {
  return (
    <div className='backContainer'>
      <Link className="backBtn">Previos Page</Link>
      <Link className="backBtn">Back To Home</Link>
    </div>
  );
}

export default BackBar