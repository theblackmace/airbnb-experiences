import React from 'react';
import logo from '../assets/airbnb.png';

function Navbar() {
    return(
        <nav>
            <img src={logo}/>
        </nav>
    );
}

export {Navbar};