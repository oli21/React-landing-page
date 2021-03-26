import React from "react";
import "./Cards.css";
import Card from "./Card";
import image9 from "./images/img-9.jpg";
import image2 from "./images/img-2.jpg";
import image3 from "./images/img-3.jpg";
import image4 from "./images/img-4.jpg";
import image8 from "./images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="bigger-cards">
          <Card
            img={image9}
            details={
              "explore the hidden waterfall deep inside the Amazon jungle"
            }
          />
          <Card
            img={image2}
            details={"Travel through the Island of Ball in a Private Cruise"}
          />
        </div>
        <div className="smaller-cards">
          <Card
            img={image3}
            details={"SetSail In the Atlantic Ocean visiting Uncharted Waters"}
          />
          <Card
            img={image4}
            details={"Experience Football on Top of the Himilaya Mountains"}
          />
          <Card
            img={image8}
            details={"Ride through the Sahara Desert on a guided camal tour"}
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
