import React from "react";
import PortfolioItem from "./PortfolioItem";
import './Portfolio.css';
function Portfolio(){
    return(
        <div className='portfolio-container'>
            <h5>Portfolio</h5>
            <h2>Each project is unique and designed for business in mind </h2>
            <div className='portfolio-items'>
                <PortfolioItem
                    src='./logo192.png'
                    title='WolfCape'
                    text='An online Wolfcape Studio page that informs studio fans about the progress of their games in development with an option of buying the game through the steam.'
                />

                <PortfolioItem
                    src='./logo192.png'
                    title='CarSlideMotion'
                    text='A Drift School website is an online platform that allows user booking a drifting lessons.
                          The website provides interface for booking lesson with selecting lecturer and car based on user prefferences'
                />
            </div>
        </div>
    );
}
export default Portfolio;