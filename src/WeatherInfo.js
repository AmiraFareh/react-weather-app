import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mb-3 ">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="wrap">
        <h2>Current weather </h2>
        <h3 className="mb-5">
          {" "}
          Updated:
          <FormattedDate date={props.data.date} />
        </h3>
        <div className="grid">
          <div className="row">
            <div className="col-6">
              <div className="clearfix">
                <div className="float-left"></div>
                <WeatherIcon code={props.data.icon} size={100} />
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>

            <div className="col-6 weather-description text-capitalize">
              {props.data.description}
              <div className="feels-like ">
                Feels like {props.data.feelsLike}
                <span className="feels-like-unit">°C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="weather-desc-grid text-center">
          <div className="row">
            <div className="col wind-label">
              Wind
              <div className="wind-speed">{props.data.wind} km/h</div>
            </div>
            <div className="col humidity-label ">
              Humidity
              <div className="humidity">{props.data.humidity}%</div>
            </div>
            <div className="col visibility-label">
              Visibility
              <div className="visibility">{props.data.visibility} km</div>
            </div>
            <div className="col pressure-label">
              Pressure
              <div className="pressure">{props.data.pressure} mb</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
