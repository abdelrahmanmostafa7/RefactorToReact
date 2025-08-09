import React from 'react'
import './Country.scss';
import { useNavigate } from "react-router-dom";

const Country = ({country}) => {
  const navigate = useNavigate();

  return (
    <div
      className="countryContainer"
      onClick={() => navigate(`/country/${country.alpha3Code}`)}
    >
      <img src={country.flags.svg} alt={country.name} />
      <h3>{country.name}</h3>
      <p>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
    </div>
  );
}

export default Country