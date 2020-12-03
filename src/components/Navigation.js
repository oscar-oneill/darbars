import React, { useRef, useState } from 'react';
import '../components/Navigation.css';
import { Link } from 'react-router-dom';
import darbars_large from '../media/darbars-large.png';

const Navigation = () => {
    const dropdownRef = useRef(null);
    const linkRef = useRef(null)
    const [isActive, setIsActive] = useState(false);
    const menuClick = () => setIsActive(!isActive);


    return (
        <div className="navigation">
           <a href="/">
                <img id="nav_logo" src={darbars_large} alt="logo"/>
            </a>
           
           <ul ref={linkRef} className={`nav_list ${isActive ? "active" : "inactive"}`}>
               <li onClick={menuClick} className="nav_items">
                   <Link className="link_color" to="/menu">Menu</Link>
               </li>
               <li onClick={menuClick} className="nav_items">
                   <a target="_blank" href="https://direct.chownow.com/order/18454/locations/26474" rel="noreferrer noopener">Order Online</a>
               </li>
               <li onClick={menuClick} className="nav_items">
                   <a href="/#about">About</a>
               </li>
               <li onClick={menuClick} className="nav_items">
                   <Link className= "link_color" to="/contact">Contact Us</Link>
               </li>
           </ul>

           <div onClick={menuClick} id="burger">&#9776;</div>
                <div ref={dropdownRef} className={`blanket ${isActive ? "active" : "inactive"}`}>
                    <ul ref={linkRef} className={`mobile_list ${isActive ? "active" : "inactive"}`}>
                        <li onClick={menuClick} className="mobile_items">
                            <Link className="link_color" to="/menu">Menu</Link>
                        </li>
                        <li onClick={menuClick} className="mobile_items">
                            <a target="_blank" href="https://direct.chownow.com/order/18454/locations/26474" rel="noreferrer noopener">Order Online</a>
                        </li>
                        <li onClick={menuClick} className="mobile_items">
                            <a href="/#about">About</a>
                        </li>
                        <li onClick={menuClick} className="mobile_items">
                            <Link className= "link_color" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
           </div>

        

        </div>
    )
}

export default Navigation
