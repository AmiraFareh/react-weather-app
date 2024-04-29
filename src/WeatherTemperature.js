import React from "react";

export default function WeatherTemperature(props) {
  return (
      <span className="WeatherTemperature">
        <span className="float-left">
          <span className="current-temp">{Math.round(props.celsius)}</span>
          <span className="unit">
            
              °C
            
            
          </span>
        </span>
      </span>
    );
  }

