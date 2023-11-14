import React, { useState } from "react";
import "./Weather.css"

export default function Weather(){
    return(
        <div className="Weather">
            <form className="mb-3 mt-3">
                <div className="row">
                <div className="col-6">
                <input type="search" placeholder="Enter a city.." className="form-control"/>
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
                <h3>
                12:52 PM
                </h3>
                <div className="grid">
                    <div className="row">
                    <div className="col-5">
                    <img src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/HeavyDrizzle.svg" alt="icon"></img>
                    19C
                    </div>
                   
                    <div className="col-7">
                        Rain
                        <div>
                            Feels like 18C
                        </div>
                        
                    </div>
                    </div>
                   
                </div>
                <p>
                Watch for scattered rain showers. The high will be 19°  
                </p>
                <div className="weather-desc-grid">
                <div className="row">
                    <div className="col">
                    Wind
                    <div>
                    17 km/h
                    </div>
                    </div>
                    <div className="col">
                    Humidity
                    <div>
                    64%
                    </div>
                    </div>
                    <div className="col">
                    Visibility
                    <div>
                    10 km
                    </div>
                    </div>
                    <div className="col">
                    Pressure
                    <div>
                    1015 mb
                    </div>
                    </div>
                    <div className="col">
                    Precipitation
                    <div>
                    49%
                    </div>
                    </div>
                    

                </div>
                </div>
            </div>
        </div>
       
    )
}