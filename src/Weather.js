import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "5aaf35163dab1f6084ofbdbf0bt4edf4";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {/* App background + centering */}
        <div className="weather-app-shell">
          {/* Main rounded card */}
          <div className="weather-card">
            {/* Search bar */}
            <form onSubmit={handleSubmit} className="weather-form">
              <input
                type="search"
                placeholder="Enter a city..."
                className="weather-input"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input
                type="submit"
                value="Search"
                className="weather-search-button"
              />
            </form>

            <WeatherInfo data={weatherData} />

            <div className="weather-forecast-wrapper">
              <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
