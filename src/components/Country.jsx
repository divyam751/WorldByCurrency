import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";

const Country = () => {
  const [currency, setCurrency] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebouncedCallback((value) => {
    if (value) {
      fetchCountries(value);
    }
  }, 500);

  const fetchCountries = async (value) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://restcountries.com/v3.1/currency/${value}`
      );
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setCurrency(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    if (currency === "") {
      setCountries([]);
    } else {
      fetchCountries(currency);
    }
  }, [currency]);

  return (
    <div className="countryComponent">
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            value={currency}
            onChange={handleChange}
            placeholder="Search By Currency INR, EUR"
            id="searchBox"
          />
        </InputGroup>
      </Stack>

      <div>
        {loading && <p>Loading...</p>}
        {!loading && countries.length === 0 && (
          <div className="emptyPage">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/387/852/non_2x/3d-male-character-sitting-on-a-sofa-and-working-on-a-laptop-with-thinking-pose-free-png.png"
              alt=""
              style={{ width: 500 }}
            />
            <h1>Search country by currency.</h1>
          </div>
        )}
        {!loading && countries.length > 0 && (
          <div className="flag-grid">
            {countries.map((country) => (
              <div key={country.cca3} className="flag-item">
                <div className="country-flag">
                  <img src={country.flags.png} alt={country.name.common} />
                </div>
                <div className="country-details">
                  <p>Name : {country.name.common}</p>
                  <p>Capital: {country.capital}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
