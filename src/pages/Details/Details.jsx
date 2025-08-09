import "./Details.scss"
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setAllCountries(data);
      const found = data.find((c) => c.alpha3Code === code);
      setCountry(found);
    };
    fetchData();
  }, [code]);

  if (!country) return <p>Loading...</p>;

  const borderButtons =
    country.borders?.map((borderCode) => {
      const borderCountry = allCountries.find(
        (c) => c.alpha3Code === borderCode
      );
      return (
        <button
          key={borderCode}
          onClick={() => navigate(`/country/${borderCode}`)}
        >
          {borderCountry?.name || borderCode}
        </button>
      );
    }) || "No borders";

  return (
    <>
      <div className="country-details">
        <img src={country.flags.svg} alt={country.name} />
        <div className="info">
          <h2>{country.name}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Top Level Domain:</strong>
            {country.topLevelDomain }
          </p>
          <p>
            <strong>Currencies:</strong>
            {country.currencies.map((c) => c.name) }
          </p>
          <p>
            <strong>Languages:</strong>
            {country.languages.map((l) => l.name) }
          </p>
          <div className="borders">
            <h3>Border Countries:</h3>
            {borderButtons}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
