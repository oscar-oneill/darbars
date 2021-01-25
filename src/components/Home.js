import React from 'react'
import About from './About';
import Footer from './Footer';
import Highlights from './Highlights';
import Main from './Main';
import Popular from './Popular';

const Home = () => {
    return (
        <div>
            <Main/>
            <Popular/>
            <About/>
            <Highlights/>
            <Footer/>
        </div>
    )
}

export default Home
