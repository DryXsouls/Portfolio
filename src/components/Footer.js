import React from "react";
import {Link} from 'react-router-dom';
function Footer(){
    return(
        <div className='footer'>
            <div className='footer-container'>
                <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                    <i className='fa fa-linkedin-square'/>
                </Link>
                <Link to=''/>
            </div>
        </div>
    );
}
export default Footer;