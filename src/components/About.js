import React from "react";
import './About.css'
import Shelf3D from "./Shelf3D";
function About(){
    return(
        <div className='about-container'>
            <div>
                <figure>
                    <>obrazok</>
                </figure>
                <div className='about-text'>
                    <h5>About me</h5>
                    <h2>Junior developer from Slovakia</h2>
                    <p>As a junior front-end developer
                        I posses skills in HTML, CSS, JavaScript, React. I excel in designing responsive Web-sites with help of Figma, Blender and Adobe Photoshop and Ilustrator.
                        I’m friendly person who thrives to finish project with his team in best state possible.</p>
                </div>
            </div>
            <Shelf3D/>
        </div>
    );
}
export default About;