import React from 'react'
import './contactus.css'
import phone from '../../assets/phone.png' 
import mail from '../../assets/mail.png'
import pic from '../../assets/logo1.png'
import {  Link } from 'react-router-dom'
const ContactUS=()=>{
  return (
    <>
    
      <div className='contact_info'>
        <nav>
          <img className='logo' src={pic} alt='' width={350} height={100} />
          <ul>
            <li><Link to="/Landing">Home</Link></li>
            <li><Link to='/AboutUs'>About</Link></li>
            <li><Link to='/ContactUs'>Contact</Link></li>
            <li><Link to='/login'>Profile</Link></li>
          </ul>  
        </nav>
        <br></br>
        <div className='contact_details'>
          <div className='contact_info_item1'>
            <div className="contact_info_item2 text-align: center;">
              <img className='logo' src={phone} alt='phone' />
              <div className='contact_info_content'>
                <div className='contact_info_title'>
                  Phone
                </div>
                <div className='contact_info_text'>
                  +91 1112 222 333
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className='contact_info_item1'>
            <div className="contact_info_item2 d-flex justify-content-start">
              <img className='logo' src={mail} alt='phone' />
              <div className='contact_info_content'>
                <div className='contact_info_title'>
                  Email
                </div>
                <div className='contact_info_text'>
                  shoppal@gmail.com
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default ContactUS