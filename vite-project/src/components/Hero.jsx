import React from 'react';
import PhotoGrid from '../assets/photo-grid.png';

function Hero() {
    return(
        <div className="hero-container">
            <img src={PhotoGrid}/>
            <div>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    );
}

export {Hero};