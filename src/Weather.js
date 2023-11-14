import React, {useState} from "react";
import "./Weather.css"
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(){
   
    const[weatherData, setWeatherData] = useState({ready: false});

function handleResponse(response){
  
    console.log(response.data);
    setWeatherData({
        ready:true,
        temperature : Math.round(response.data.main.temp),
        city: response.data.name,
        wind: Math.round(response.data.wind.speed),
        humidity: Math.round(response.data.main.humidity),
        visibility: Math.round(response.data.visibility/1000),
        pressure: Math.round(response.data.main.pressure),
        feelsLike: Math.round(response.data.main.feels_like),
        country: response.data.sys.country,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt * 1000)
      


    })
}

if(weatherData.ready){
    return(
        <div className="Weather">
            <form className="mb-3 mt-3">
                <div className="row">
                <div className="col-6">
                <input type="search" placeholder="Enter a city.." className="form-control" autoFocus ="on"/>
                </div>
                <div className="col-3">
                <input type = "submit" value = "Search" className="btn btn-primary" ></input>
                </div>
                <div className="col-3">
                <input type = "submit" value = "Current location" className="btn btn-secondary" ></input>
                </div>
                </div>
                
               
               
            </form>
            <h1 className="mb-3 ">{weatherData.city}, {weatherData.country}</h1>
            <div className="wrap">
                <h2>Current weather </h2>
                <h3 className="mb-4">
                <FormattedDate date = {weatherData.date}/>
                </h3>
                <div className="grid mb-5">
                    <div className="row">
                    <div className="col-6">
                    <div className="clearfix">
                    <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/HeavyDrizzle.svg" alt="icon" className="float-left"/>
                    <span className="float-left">
                    <span className="current-temp">{weatherData.temperature}</span>
                    <span className="unit">°C</span>
                   
                    </span>
                    </div>
                    </div>
                   
                    <div className="col-6 weather-description text-capitalize">
                        {weatherData.description}
                        <div className="feels-like ">
                            Feels like {weatherData.feelsLike}<span className="feels-like-unit">°C</span>
                        </div>
                        
                    </div>
                    </div>
                   
                </div>
                
                <div className="weather-desc-grid">
                <div className="row">
                    <div className="col wind-label">
                    Wind
                    <div className="wind-speed">
                    {weatherData.wind} km/h
                    </div>
                    </div>
                    <div className="col humidity-label ">
                    Humidity
                    <div className="humidity">
                    {weatherData.humidity}%
                    </div>
                    </div>
                    <div className="col visibility-label">
                    Visibility
                    <div className="visibility">
                    {weatherData.visibility} km
                    </div>
                    </div>
                    <div className="col pressure-label">
                    Pressure
                    <div className="pressure">
                    {weatherData.pressure} mb
                    </div>
                    </div>
                   
                    

                </div>
                </div>
            </div>
        </div>
       
    );
}
else{
    let city ="Auckland"
    const apiKey = "eb9542c65e739e0fb25ade97c749e2aa"
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    

    return "Loading..."
   
}
    
}