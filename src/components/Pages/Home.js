import React from "react";
import Hero from '../Hero'
import About from '../About'
import Portfolio from "../Portfolio";
import Contact from "../Contact";
function Home(){
    return(
        <div>
            <Hero/>
            <About/>
            <Portfolio/>
            <Contact/>
        </div>


    );
}

export default Home;