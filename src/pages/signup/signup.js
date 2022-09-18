import React from 'react'
import axios from "axios";
import { useEffect, useRef, useState ,useContext} from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {useNavigate } from 'react-router-dom';
import { ClassNames } from "@emotion/react";
import 'react-phone-input-2/lib/style.css';
const Signup = () => {
    const paperStyle = { padding: '30px',height:'180vh', width: 370, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const marginTop = { marginTop: 5 }
    const userRef=useRef();
    const errRef=useRef();
    const navigate=useNavigate();
    const[user,setUser]=useState('');
    const[email,setEmail]=useState('');
    const[mobile,setMobile]=useState('');
    const[pwd, setPwd]=useState('');
    const[radio,setRadio]=useState(0);
    const[preferredDays,setPreferredDays]=useState('');
    const[preferredLocations,setPreferredLocations]=useState('');
    const[preferredStores,setPreferredStores]=useState('');
    const[preferredTimings,setPreferredTimings]=useState('');
    const[address,setAddress]=useState('');
    const [errMsg, setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);
     useEffect(()=>{
        userRef.current.focus();
      },[])
      useEffect(()=>{
        setErrMsg('');
     },[user,email,mobile,pwd])
     function handleClick(e)
     {
        console.log(radio);
     }
     function handleChange(e){
        const{nodeName,value}=e.target;
        if(nodeName==='INPUT')
        {
            setRadio(value);
        }
     }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/create";
        const baseURL2 = "http://localhost:8080/api/profile/create";
        try{
            const response =await axios.post(baseURL,JSON.stringify({ name:user,email:email,gender:radio,mobile_no:mobile,password:pwd}),
               { credentials: 'include',
                 'Access-Control-Allow-Origin' : '*',
                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                 headers: {'Content-Type': 'application/json', },
                 }
                 );
            const response2 =await axios.post(baseURL2,JSON.stringify({name:user,email:email,preferredlocations:preferredLocations,preferredtimings:preferredTimings,preferreddays:preferredDays,preferredstores:preferredStores,address:address,gender:radio,mobile_no:mobile}),
                { credentials: 'include',
                   'Access-Control-Allow-Origin' : '*',
                   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                   headers: {'Content-Type': 'application/json', },
                   }
                   );
                 console.log(response.status);
                 console.log(response.data);
                 console.log(preferredLocations);
                 if(response.data==="user created successfully")
                {
                    
                  alert("Registration Successfull");
                  navigate("/login");
                }
                else if(response.data==="Found duplicate entry")
                {
                    alert("A user already registered with the provided found");
                }
                else{
                  setUser('');
                  setEmail('');
                  setRadio('');
                  setMobile('');
                  setPwd('');
                  setPreferredDays('');
                  setPreferredLocations('');
                  setPreferredStores('');
                  setAddress('');
                  alert("Cannot register!!check your details!!");
                  handleClose();
                }
            }
            catch(err)
            {console.log(err);
                console.log("Cannot create user");
                console.log(user,email,radio,mobile,pwd);
            }
        }
 const handleClose=()=>
 {
    navigate("/login");
 }



    return (
        <Grid>
             <form className={ClassNames.root} onSubmit={handleSubmit}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>

               
                <TextField label="Name"
                    placeholder='Enter your Name..'
                    variant="filled"
                    required 
                    id="username" 
                    ref={userRef} 
                    autoComplete="off"
                    onChange={(e)=> setUser(e.target.value)} 
                    value={user} />
                   <br/>
                   <br/>
                  <TextField
                   placeholder="Enter your email"
                   label="Email"
                   variant="filled"
                   type="email"
                   required 
                   id="email" 
                   ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setEmail(e.target.value)} 
                   value={email} />
                 <br/>
                  <FormControl component="fieldset" style={marginTop}>
                    <label htmlFor="name">Gender:</label>
                      <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" onChange={handleChange} />
                        <FormControlLabel value="male" control={<Radio />} label="Male" onChange={handleChange} />
                        <FormControlLabel value="others" control={<Radio />} label="others" onChange={handleChange} />
                      </RadioGroup>
                  </FormControl>
                  <br/>
                  <br/>
                  <TextField label="MobileNumber"
                    variant="filled"
                    placeholder="Enter your phone number" required
                    id="mobile" 
                    ref={userRef} 
                    autoComplete="off"
                    onChange={(e)=> setMobile(e.target.value)} 
                    value={mobile} />
                  <br/>
                  <br/>
                  <TextField label="Password" 
                    type="password" 
                    required 
                    placeholder="Enter your password"
                    id="password" 
                    variant="filled"
                    onChange={(e)=> setPwd(e.target.value)} 
                    value={pwd} />
                  <br/>
                  <br/>
                  <TextField
                   placeholder="Enter your preferred locations"
                   label="Preferred locations"
                   variant="filled"
                   id="PREFERREDLOCATIONS" 
                   required
                   ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setPreferredLocations(e.target.value)} 
                   value={preferredLocations} />
                  <br/>
                  <br/>
                  <TextField
                   placeholder="Enter your preferred days"
                   label="Preferred days"
                   variant="filled"
                   id="PREFERREDDAYS" 
                   required
                   ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setPreferredDays(e.target.value)} 
                   value={preferredDays} />
                  <br/>
                  <br/>
                  <TextField
                   placeholder="Enter your preferred timings"
                   label="Preferred timings"
                   variant="filled"
                   required
                   id="PREFERREDTIMINGS" 
                   ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setPreferredTimings(e.target.value)} 
                   value={preferredTimings} />
                  <br/>
                  <br/>
                  <TextField
                   placeholder="Enter your preferred stores"
                   label="Preferred stores"
                   variant="filled"
                   id="PREFERREDSTORES" 
                   required
                   ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setPreferredStores(e.target.value)} 
                   value={preferredStores} />
                  <br/>
                  <br/>
                  <TextField
                   placeholder="Enter your address"
                   label="Address"
                   variant="filled"
                   required
                   id="ADDRESS" 
                   ref={userRef} 
                   autoComplete="off"
                   onChange={(e)=> setAddress(e.target.value)} 
                   value={address} />
                  <br/>
                  <br/>
                  <div>
                  <Button variant="contained" onClick={handleClose} >Cancel
                  </Button>
                  <Button type="submit" variant="contained" color="primary">Signup</Button>
                  </div>
                  </Paper>
            </form>
        </Grid>
    )
}

export default Signup;