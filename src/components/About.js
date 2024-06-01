import React from "react";
import './About.css'
import Shelf3D from "./Shelf3D";
function About(){
    return(
        <div className='about-container'>
           <div>
               <div>
                   <>obrazok</>
               </div>
               <div className='about-text'>
                   <h3>About me</h3>
                   <h2>temp text</h2>
                   <p>temp text</p>
               </div>
           </div>
            <Shelf3D/>
        </div>

    );
}
export default About;