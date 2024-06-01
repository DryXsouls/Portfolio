import React from "react";
import Shelf3D from "./Shelf3D";


function PortfolioItem(props){
    return(
        <div className='portfolio-item'>
            <figure className='portfolio-item-wrap'>
                <img src={props.src} alt='webpage-img' className='portfolio-item-img'/>
            </figure>
            <div className='portfolio-item-information'>
                <h5>{props.title}</h5>
                <p>{props.text}</p>
                <Shelf3D/>
            </div>
        </div>
    );
}
export default PortfolioItem;