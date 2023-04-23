import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [countryView, setCountryView] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase());
  };

  const showCountry = (country) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <h3>languages:</h3>
        <ul>
          {Object.values(country.languages).map((language, id) => (
            <li key={id}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`flag of ${country.capital}`} />
      </div>
    );
  };

  const handleOnClick = (country) => {
    setCountryView(showCountry(country));
  };

  const filterCountres = () => {
    if (countries.length === 0) {
      return;
    }

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(filter)
    );

    if (filteredCountries.length > 10) {
      return "Too many matches, specify another filter";
    } else if (filteredCountries.length > 1) {
      return (
        <div>
          {countryView}
          {filteredCountries.map((country) => (
            <p key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleOnClick(country)}>show</button>
            </p>
          ))}
        </div>
      );
    } else {
      return showCountry(filteredCountries[0]);
    }
  };

  return (
    <div>
      <form>
        <div>
          find countries
          <input value={filter} onChange={handleFilter} />
        </div>
      </form>
      {filterCountres()}
    </div>
  );
};

export default App;
