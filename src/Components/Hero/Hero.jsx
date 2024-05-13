import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow__icon from '../Assets/arrow.png'
import hero_image from '../Assets/air force.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>Welcome To OTLOB</h2>
                <div> 
                <div className="hero-hand-icon">
                    <p>Deals</p>
                 </div>
                 <p>Of</p>
                 <p>The Day</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Shop Now</div>
                    
                </div>
            </div>
        <div className="hero-right">
        <img src={hero_image} className="hero-right img" />
         </div>
        </div>
    );
}

export default Hero;
