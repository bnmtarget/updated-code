import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import {useNavigate } from 'react-router-dom';
import { ClassNames } from "@emotion/react";
import axios from "axios";
const EditProfile = () => {
    const [rows,setRows]=useState([]);
    const [user, setUser]=useState(localStorage.getItem("user")||false);
    const getUserData=async()=>{
        try{
            const data=await axios.get("http://localhost:8080/api/profile/"+user);
            console.log("hello");
            console.log(data.data);
            setRows(data.data);
            setPreferredLocations(data.data.preferredlocations);
            setPreferredStores(data.data.preferredstores);
            setPreferredDays(data.data.preferreddays);
            setPreferredTimings(data.data.preferredtimings)

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
    const paperStyle = { padding: '30px',height:'90vh', width: 370, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
    const userRef=useRef();
    const errRef=useRef();
    const navigate=useNavigate();
    const[preferredLocations,setPreferredLocations]=useState('');
    const[preferredStores,setPreferredStores]=useState('');
    const[preferredDays,setPreferredDays]=useState('');
    const[preferredTimings, setPreferredTimings]=useState('');
    console.log(preferredDays,preferredLocations,preferredStores,preferredTimings);
     
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/updateprofile/"+user;
        try{
            const response =await axios.put(baseURL,JSON.stringify({ preferreddays:preferredDays,preferredlocations:preferredLocations,preferredstores:preferredStores,preferredtimings:preferredTimings}),
               { credentials: 'include',
                 'Access-Control-Allow-Origin' : '*',
                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                 headers: {'Content-Type': 'application/json', },
                 }
                 );
                 console.log(response.status);
                 console.log(response.data);
                 if(response.data==="profile updated")
                {
                    
                  alert("Updated Successfully");
                  navigate("/buddiespage");
                }
                else if(response.data==="Found duplicate entry")
                {
                    alert("A user already registered with the provided found");
                }
                else{
                   
                   alert("Cannot update!!check your details!!");
                   handleClose();
                }
            }
        catch(err)
            {console.log(err);
                console.log("Cannot update user");
                console.log(preferredDays,preferredLocations,preferredTimings,preferredStores);
            }
    }
 const handleClose=()=>
 {
    navigate("/profile");
 }
    return (
        <Grid>
            <form className={ClassNames.root} onSubmit={handleSubmit}>
            <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <h2 style={headerStyle}>SHOP-PAL</h2>
                <Typography variant='caption' gutterBottom>Edit Here !</Typography>
            </Grid>
               
            <label htmlFor="PrefferedLocations">PrefferedLocations</label>
            <input type="text" 
                variant="filled"
                id="preferredLocations" 
                ref={userRef} 
                autoComplete="off"
                onChange={(e)=> setPreferredLocations(e.target.value)} 
                value={preferredLocations} />
            <br/>
            <br/>
            <label htmlFor='PrefferedTimings'>PreferredTimings</label>
                <input type="text" 
                variant="filled"
                id="preferredTimings" 
                ref={userRef} 
                autoComplete="off"
                onChange={(e)=> setPreferredTimings(e.target.value)} 
                value={preferredTimings} />
            <br/>
            <br/>
            <label htmlFor="PreferredStores">PreferredStores</label>
                <input type="text" 
                variant="filled"
                id="preferredStores" 
                ref={userRef} 
                autoComplete="off"
                onChange={(e)=> setPreferredStores(e.target.value)} 
                value={preferredStores} />
            <br/>
            <br/>
            <label htmlFor="PreferredDays" >PreferredDays</label>
                <input type="text" 
                id="preferredDays" 
                variant="filled"
                onChange={(e)=> setPreferredDays(e.target.value)} 
                value={preferredDays} />
            <br/>
            <br/>
            <div>
                <Button variant="contained" onClick={handleClose} >Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">Save</Button>
                </div>
            </Paper>
            </form>
        </Grid>
    )

}
export default EditProfile;