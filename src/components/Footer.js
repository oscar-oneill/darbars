import React from 'react';
import '../components/Footer.css';
import Darbars from '../media/darbars-large.png';
import atrain from '../media/mta-a.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div id='footer_container'>
            <div id='footer_image'>
                <img id='logo' src={Darbars} alt='logo'/>
            </div>

            <div id='address'>
                <span>Address</span> <br/>
                126-09 Liberty Ave <br/>
                South Richmond Hill, NY 11419 <br/>
                (718) 529-4900
            </div>

            <div id='directions'>
                <span>Public Transit</span> <br/>
                <ul id='transit'>
                    <li>Q112 to Liberty Ave/126 St</li>
                    <li>Q41 (Howard Beach) to 127 St/Liberty Ave</li>
                    <li>Q41 (Jamaica 165 St Terminal) to 128 St/Liberty Ave</li>
                    <li><img id='train' src={atrain} alt='a_train_logo'/> 
                        to Ozone Park-Lefferts Blvd 
                    </li>
                </ul>
            </div>

            <div id='operation'>
                <span>Hours</span> <br/>
                <ul id='hours'>
                    <li>Sunday - Thursday: 10 AM to 10 PM</li>
                    <li>Friday & Saturday: 10 AM to 11 PM</li>
                </ul>
            </div>

            <div id='connect'>
                <span>Stay Connected</span> <br/>
                <ul id='social'>
                    <li><a target="_blank" rel="noreferrer noopener" href='https://www.facebook.com/Darbars-Chicken-Ribs-120908984592237/'>
                        <FontAwesomeIcon className='icons' icon={faFacebook}/>
                    </a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href='https://instagram.com/darbarshalal/'>
                        <FontAwesomeIcon className='icons' icon={faInstagram}/>
                    </a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href='https://twitter.com/darbarshalal'>
                        <FontAwesomeIcon className='icons' icon={faTwitter}/>
                    </a></li>
                    <li><a target="_blank" rel="noreferrer noopener" href='https://www.yelp.com/biz/darbars-chicken-and-ribs-south-richmond-hill'>
                        <FontAwesomeIcon className='icons' icon={faYelp}/>
                    </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
