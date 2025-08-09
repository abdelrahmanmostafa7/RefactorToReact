import React from 'react'
import './Country.scss';

const Country = ({country}) => {
  return (
    <div className="countryContainer">
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