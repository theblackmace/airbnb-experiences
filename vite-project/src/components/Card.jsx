import React from 'react';
import Star from '../assets/Star.png'

function Card(props) {
    let badgeText;
    if(props.openSpots===0) {
        badgeText = 'SOLD OUT';
    } else if(props.location==='Online') {
        badgeText = 'Online';
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../public/images/${props.coverImg}`}/>
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    );
}

export {Card};