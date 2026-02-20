import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {/* City + date + description */}
      <div className="weather-header">
        <h1>{props.data.city}</h1>
        <p className="weather-date">
          <FormattedDate date={props.data.date} />
        </p>
        <p className="weather-description text-capitalize">
          {props.data.description}
        </p>
      </div>

      {/* Big icon + temp */}
      <div className="weather-main">
        <WeatherIcon code={props.data.icon} size={82} />
        <WeatherTemperature fahrenheit={props.data.temperature} />
        <p className="weather-subtitle">
          Expect {props.data.description} today.
        </p>
      </div>

      {/* Small stats row */}
      <div className="weather-details">
        <div className="weather-detail-item">
          <span className="weather-detail-label">Humidity</span>
          <span className="weather-detail-value">{props.data.humidity} %</span>
        </div>
        <div className="weather-detail-item">
          <span className="weather-detail-label">Wind</span>
          <span className="weather-detail-value">
            {Math.round(props.data.wind)} mph
          </span>
        </div>
      </div>
    </div>
  );
}
