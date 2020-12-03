import React from 'react';
import '../components/Highlights.css';
import Family from '../media/family.png';
import Halal from '../media/halal.png';
import Delivery from '../media/delivery.png';

const Highlights = () => {
    return (
        <div id='highlights_container'>
            <div className='highlights'>
                <img className='hlgt_icon' src={Family} alt='logo'/>
                <div className='hlgt_text'>Family Owned & Operated</div>
            </div>

            <div className='highlights'>
                <div id='number'>23</div>
                <div className='hlgt_text'>Years In Business</div>
            </div>

            <div className='highlights'>
                <img className='hlgt_icon' src={Halal} alt='logo'/>
                <div className='hlgt_text'>Fresh Halal Food</div>
            </div>

            <div className='highlights'>
                <img className='hlgt_icon' src={Delivery} alt='logo'/>
                <div className='hlgt_text'>Fast Delivery</div>
            </div>
        </div>
    )
}

export default Highlights
