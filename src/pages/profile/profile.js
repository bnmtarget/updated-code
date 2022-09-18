import React from 'react'
import './profile.css'
import pic from '../../assets/logo1.png'
import prof from '../../assets/profile.png'
import {  Link } from 'react-router-dom'

import {  useEffect,useState } from "react";
import axios from "axios";
import {   useNavigate } from 'react-router-dom';
const Profile=()=> {
    const [rows,setRows]=useState([]);
    const navigate=useNavigate();
    const [user, setUser]=useState(localStorage.getItem("user")||false);
    console.log(user);
    const getUserData=async()=>{
        try{
            const data=await axios.get("http://localhost:8080/api/profile/"+user);
            console.log(data.data);
            setRows(data.data);
        }
        catch(e)
        {
            console.log(e);
            alert(e);
        }
        
    }
    useEffect(()=>{
        getUserData()
    },[]);
    const handleEdit=async()=>{
        console.log("not");
        navigate("/editprofile");
    }
    const handlelogout=async()=>{
        navigate("/login");
    }
    const handleFind=async()=>{
        navigate("/buddiespage");
    }
  return (
    <div className='header'>
        <nav>
            <img className='logo' src={pic} alt='' width={350} height={100} />
            <ul>
                <li><Link to="/Landing">Home</Link></li>
                <li><Link to='/AboutUs'>About</Link></li>
                <li><Link to='/ContactUs'>Contact</Link></li>
                <li><Link to='/profile'>Profile</Link></li>

            </ul>
        </nav>

        <div className="container mt-5">
    
            <div className="row d-flex justify-content-center">
        
            <div className="col-md-7">
            
            <div className="card p-3 py-4 ">
                <div className='float-container'>
                <div className="float-child text-center">

                    <img className='prof' src={prof} alt='profile not found' width="200" class="rounded-circle"/>
                </div>
                
                <div className=" float-child text-center mt-3">
                    
                    <div className="mt-2 mb-0">

                        <h5 align='left'>Name:{rows.name} </h5>
                        <h5 align='left'>Email: {rows.email}</h5>
                        <h5 align='left'>Preferred Location: {rows.preferredlocations} </h5>
                        <h5 align='left'>Preferred Stores: {rows.preferredstores} </h5>
                        <h5 align='left'>Preferred Timings: {rows.preferredtimings}</h5>
                        <h5 align='left'>Preferred Days: {rows.preferreddays}</h5>

                       
                        
                    
                    </div>
                    </div> 
                    
                    <div className="buttons inside">
                        

                        <button className="btn btn-outline-primary px-4" onClick={handleEdit}>Edit Profile</button>


                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
    </div>

    <div className="buttons hello" >
                        
                        <button className="btn btn-outline-primary px-4" onClick={handlelogout}>Logout</button>
                        <button className="btn btn-primary px-4 ms-3" onClick={handleFind}>Find Pal</button>
                    </div>
    </div>
  )
}


 export default Profile;


