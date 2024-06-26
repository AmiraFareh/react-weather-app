import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    const apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      visibility: Math.round(response.data.visibility / 1000),
      pressure: Math.round(response.data.main.pressure),
      feelsLike: Math.round(response.data.main.feels_like),
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3 mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
            
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates ={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
