import React from "react";

export default function Card(props){
    return(
        <div className="card--container">
        <img className="card--img" src={props.src} alt="park"/>
        <h2 className="card--h2">{props.title}</h2>
        <p className="card--p">{props.description}</p>
        </div>

    )
}