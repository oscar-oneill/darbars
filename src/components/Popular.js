import React from 'react';
import '../components/Popular.css';
import bbqChicken from '../media/Popular/bbqchicken.jpg';
import beefgyrowrap from '../media/Popular/beefgyrowrap.jpg';
import dblburger from '../media/Popular/dblburger.jpg';
import fishsandwich from '../media/Popular/fishsandwich.jpg';
import lambchops from '../media/Popular/lambchops.jpg'
import lomein from '../media/Popular/lomein.jpg'
import mixedgyro from '../media/Popular/mixedgyro.jpg'
import shrimp from '../media/Popular/shrimp.jpg'

const Popular = () => {
    return (
        <div id='popular'>
            <div className="pop_header">Popular Menu Items</div>

            <div className="photo_container">
                <div className="food_images">
                    <img src={bbqChicken} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={beefgyrowrap} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={dblburger} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={fishsandwich} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={lambchops} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={lomein} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={mixedgyro} alt="food"/>
                </div>

                <div className="food_images">
                    <img src={shrimp} alt="food"/>
                </div>
            </div>
        </div>
    )
}

export default Popular
