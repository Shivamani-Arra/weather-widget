import React, { useState } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Hyderabad",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}><h2>Weather App.</h2></div>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
