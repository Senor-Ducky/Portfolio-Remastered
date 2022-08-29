import React from "react";
import '../card/card.css';

function Card(props) {
    return(
        <div className="card">
            <img className="card-img" src={props.url}/>
        </div>
    );
}

export default Card