import React, { useEffect, useRef, useState ,useContext} from 'react';
import {Grid,Paper,Avatar,TextField,Button,Typography } from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormcontrolLabel from '@material-ui/core/FormcontrolLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AuthContext from '../../context/AuthProvider';
import {  Link, Redirect, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';


import { ClassNames } from "@emotion/react";
const Login =()=>{
    const navigate=useNavigate();
    const {setAuth}=useContext(AuthContext);
    const paperStyle={padding :20,height:'90vh',width:365,margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const userRef=useRef();
    const errRef=useRef();
    const [user, setUser]=useState('');
    localStorage.setItem("user",user);
    const [pwd, setPwd]=useState('');
    const [errMsg, setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);
    const profileuser = {user};
    useEffect(()=>{
        userRef.current.focus();
    },[])
   
    useEffect(()=>{
        setErrMsg('');
    },[user,pwd])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const baseURL = "http://localhost:8080/api/user/"+user;
        try{
        const response =await axios.get(baseURL,
          {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    );
    console.log(response.status);
    if(response.status===404)
    {
        console.log("User not found");

        alert("Cannot find a user with the given details!!");

    }
    else{
    console.log(JSON.stringify(response?.data));
    console.log(user,pwd);
        setAuth({user,pwd});
         setUser('');
        setPwd('');
        setSuccess(true);
        if(pwd===response.data.password)
        {
             navigate("/buddiespage");
            console.log("logged in");
        }
        else

            {
        alert("Credential mismatch!!Please check your username or password");

           
            console.log("Credential mismatch!!Please check your username or password");
        }
    }
}
        catch(err)
        {
            console.log("User not found");

            alert("User not registered! Please register to login!!");
            navigate("/signup");
        }
    } 
   


    return(
        
        <div>
        <Grid>
        <form className={ClassNames.root} onSubmit={handleSubmit}>
        
            <Paper elevation={20} style={paperStyle}> 
            <Grid align='center'>
                <section>
                <p ref={errRef} className={errMsg ? "errmsg":
                "offscreen"} aria-live="assertive">{errMsg}</p>
                </section>
            <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
            <h2>Sign in</h2>
            </Grid>
            
            <br/>
            <TextField label="Email"
            type="email" 
            variant='filled'
            id="email" 
            ref={userRef} 
            autoComplete="off"
            onChange={(e)=> setUser(e.target.value)} 
            value={user} required
            />
            <br/>
            <br/>
            <TextField label="Password" type="password" 
            id="password" 
            variant='filled'
            ref={userRef} 
            autoComplete="off"
            onChange={(e)=> setPwd(e.target.value)} 
            value={pwd} required
            />
            <br/>
            <br/>
            <FormcontrolLabel
            control={
                <Checkbox
                name="checkedB"
                color="primary"
                />
            }
           label="Remember me"
            />
            <br/>
            <Button type='submit' name="submit1" color='primary' variant="contained"  onClick={handleSubmit} >
                Sign in
                </Button>
                <br/>
                <br/>
                <Typography>
                <a href="#" >
                 Forgot password?
                </a>
                </Typography>
                <br/>
                <Typography>Create your account :
                <Link to="/signup" >
                 Sign up
                </Link>
                </Typography>
            </Paper>
            </form>
        </Grid>
        </div>
        
    );
    
}
export default Login;