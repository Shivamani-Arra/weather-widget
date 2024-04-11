import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "8649d26ebc90b042984ee8ab7a1e6be8";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      if (jsonResponse.cod === 200) {
        let result = {
          city: city,
          temp: (jsonResponse.main.temp - 273.15).toFixed(2),
          tempMin: (jsonResponse.main.temp_min - 273.15).toFixed(2),
          tempMax: (jsonResponse.main.temp_max - 273.15).toFixed(2),
          humidity: jsonResponse.main.humidity,
          feelsLike: (jsonResponse.main.feels_like - 273.15).toFixed(2),
          weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      } else {
        throw new Error(jsonResponse.message);
      }
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='SearchBox'>
      <h3>Search for the weather.</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
        <br />
        <Button variant="contained" color="primary" type="submit">Search</Button>
      </form>
      {err && <p style={{color:"red"}}>No such place in our API</p>}
    </div>
  );
}
