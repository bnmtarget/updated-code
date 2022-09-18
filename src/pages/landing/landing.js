import React from 'react'
import './landing.css'
import pic from '../../assets/logo1.png'
import img from '../../assets/headerimgnew1.png'
import {  Link } from 'react-router-dom'
const Landing=()=> {
  return (
    <>
    <div className='header'>
        <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>

                {/* <li><Link to='/profile'>Profile</Link></li> */}

                {/* <li><Link to='/profile'>Profile</Link></li> */}

            </ul>
        </nav>

        <div className='text-box'>
            <h1>The Smart Way Shopaholics Find Their Buddies</h1>
            <br></br>
            <p>
            </p>
            <Link to='/login'>Find Buddies</Link>

        </div>
        <div className='user-box'>
        <img src={img} alt='' />
        </div>
    </div>
        
    </>
  )
}

export default Landing;