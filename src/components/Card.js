import React from "react";
import "./Card.css";


function Card(props) {
  return (
    <>
      <div className="card">
        <div className="img">
            <img src={props.img} alt=""/>
        </div>
        <div className="title">
            <p>
                {props.details}
            </p>
        </div>
      </div>
    </>
  );
}

export default Card;
