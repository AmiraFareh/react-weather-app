import React from "react";

export default function FormattedDate(props){
    let day = props.date.getDay();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
    let hours = props.date.getHours()
    let minutes = props.date.getMinutes()
    if (hours<10){
        hours = `0${hours}`
    }
    if(minutes<10){
        minutes = `0${minutes}`
    }
    return(`${days[day]} ${hours}:${minutes}` )
}