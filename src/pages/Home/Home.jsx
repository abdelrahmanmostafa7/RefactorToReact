import React, { useEffect, useState } from "react";
import "./Home.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import Country from "../../components/Country/Country";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    setFiltered(countries.filter((c) => c.name.toLowerCase().includes(value)));
  };

  const handleFilter = (region) => {
    setFiltered(
      region ? countries.filter((c) => c.region === region) : countries
    );
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="HomeContainer">
      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />
      <div className="countryCardsContainer">
        {(filtered.length ? filtered : countries).map((country) => (
          <Country key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
