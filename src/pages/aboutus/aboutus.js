import React from 'react'
import './aboutus.css'
import pic from '../../assets/logo1.png'
import {  Link } from 'react-router-dom'

const AboutUs = () => (
    <div className='AboutUs'>
        <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>
                <li><Link to='/login'>Profile</Link></li>

            </ul>
        </nav>
        <h1 align='center'> Welcome to shop pal</h1> 
        <h5 align='center'>Find your shopping buddies here!!</h5>
        <br/>
        <br/>
        <p>Thinking of visiting your favourite stores with someone just like you? ShopPal is your one stop solution to find amazing people with similar interests and preferences. Enter your preferred locations and timings and choose from a customized list of people you want to hang out with. Get started by creating an account today!
        </p>

    </div>
)

export default AboutUs