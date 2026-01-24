import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Powder Springs</h1>
      <ul>
        <li>Saturday 9:56</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex align-items-center">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/cloudy_light.svg"
              alt="Cloudy"
              className="me-2"
            />{" "}
            <span className="temperature">43</span>
            <span className="unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 46%</li>
            <li>Wind: 11 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
