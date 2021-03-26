import React from 'react'
import './HeroContainer.css'
import video from "./videos/video-1.mp4";


function HeroContainer() {
    return (
      <>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="heroContainer">
          <h1>Adventure awaits</h1>
          <p>What are you waiting for?</p>
          <div className="heroContainer-btn">
            <button className="btn">Get Started</button>
            <button className="btn active">
              Watch trailer <i className="far fa-play-circle"></i>
            </button>
          </div>
        </div>
      </>
    );
}

export default HeroContainer
