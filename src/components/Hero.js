import React from "react";
import './Hero.css';
import Shelf3D from "./Shelf3D";
function Hero(){
    return(
        <div className='hero'>
            <div className='hero-container'>
                <div className='hero-top'>
                    <div className='hero-left'>
                        <h1>Front-end React Developer</h1>
                        <p>Hi I'm Matúš Vytykáč aspiring Front-end developer</p>
                        <p>Inspired with 3D designs</p>
                    </div>
                    <div className='hero-right'>
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src='../../public/logo192.png' alt='profile photo'/>
                    </div>
                </div>
                <Shelf3D/>
            </div>
        </div>
    );
}
export default Hero;