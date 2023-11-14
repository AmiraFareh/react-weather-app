import React from "react";
import "./Weather.css"

export default function Weather(){
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
            <h1 className="mb-3 ">Auckland, New Zealand</h1>
            <div className="wrap">
                <h2>Current weather </h2>
                <h3 className="mb-4">
                12:52 PM
                </h3>
                <div className="grid mb-5">
                    <div className="row">
                    <div className="col-6">
                    <div className="clearfix">
                    <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/HeavyDrizzle.svg" alt="icon" className="float-left"/>
                    <span className="float-left">
                    <span className="current-temp">18</span>
                    <span className="unit">°C</span>
                   
                    </span>
                    </div>
                    </div>
                   
                    <div className="col-6 weather-description">
                        Rain
                        <div className="feels-like">
                            Feels like 18°C
                        </div>
                        
                    </div>
                    </div>
                   
                </div>
                
                <div className="weather-desc-grid">
                <div className="row">
                    <div className="col wind-label">
                    Wind
                    <div className="wind-speed">
                    17 km/h
                    </div>
                    </div>
                    <div className="col humidity-label ">
                    Humidity
                    <div className="humidity">
                    64%
                    </div>
                    </div>
                    <div className="col visibility-label">
                    Visibility
                    <div className="visibility">
                    10 km
                    </div>
                    </div>
                    <div className="col pressure-label">
                    Pressure
                    <div className="pressure">
                    1015 mb
                    </div>
                    </div>
                    <div className="col precipitation-label" >
                    Precipitation
                    <div className="precipitation">
                    49%
                    </div>
                    </div>
                    

                </div>
                </div>
            </div>
        </div>
       
    )
}