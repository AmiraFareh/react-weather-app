import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForcast] = useState(null);

useEffect(() =>{
setLoaded(false);
}, [props.coordinates]);
  

  
  function handleResponse(response){
    setForcast(response.data.daily);
    setLoaded(true);
  }
  

 
  
  if (loaded){
   
    return (
      <div className="WeatherForecast mt-5">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if(index<5){
              return(
                <div className="col" key={index}>
                <WeatherForecastDay data = {dailyForecast}/>
              </div>
              )
            } else {
              return null;
            }
            
          })}
        
        </div>
      </div>
    );
    
  }
  else{
    let apiKey = "a95c2c6739994ba4903e007ee817e7d1";
    let longitude = props.coordinates.lon;
    let latitude =  props.coordinates.lat;
    let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiURL).then(handleResponse);

    return null
  }
  
  }

  