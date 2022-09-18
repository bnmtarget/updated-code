import axios from "axios";
import {  useEffect,useState } from "react";
import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import pic from '../../assets/logo1.png'
import {  Link } from 'react-router-dom'
import {   useNavigate } from 'react-router-dom';
import './buddiespage.css'
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Buddie=()=>{
  const classes = useStyles();
  const [rows,setRows]=useState([]);
  const [search,setSearch]=useState('');
  const btnstyle={margin:'8px 0'}
  const navigate=useNavigate();
  const getUserData=async()=>{
  try{
    const data=await axios.get("http://localhost:8080/api/userprofile");
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

    const handleSubmit=()=>{
            navigate("/login");
          }
      
    const handleProfile=()=>{
        navigate("/profile");
      }
  return (
    <div className="header">
    <nav>
      <img className='logo' src={pic} alt='' width={350} height={100} />
      <ul>
        <li><Link to="/Landing">Home</Link></li>
        <li><Link to='/AboutUs'>About</Link></li>
        <li><Link to='/ContactUs'>Contact</Link></li>  
        <li> <Button type='submit' name="submit2" color='primary'variant="contained"  style={btnstyle} onClick={handleProfile} >Profile</Button></li>
        <li><Button type='submit' name="submit1" color='primary'variant="contained"  style={btnstyle} onClick={handleSubmit} >Logout</Button></li>
      </ul>
    </nav>
    <div className="search">
    <div className="form-outline">
    <input type="search"  class="form-control" aria-label="Search" onfocus="this.placeholder=''" 
      onblur="this.placeholder='Search By Location'"  
      onChange={(e)=>{
        setSearch(e.target.value);
      }}
      className="input"
      placeholder="Search By Location..."
    />
    </div>
    </div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Email Id</StyledTableCell>
            <StyledTableCell align="center">Mobile Number</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Preferred Locations</StyledTableCell>
            <StyledTableCell align="center">Preferred Stores</StyledTableCell>
            <StyledTableCell align="center">Preferred Days</StyledTableCell>
            <StyledTableCell align="center">Preferred Timings</StyledTableCell>
          </TableRow>

        </TableHead>
        <TableBody>
        {rows.filter((item)=>{
        if(search==""){
            return item
        }
        else if(item.preferredlocations?.toLowerCase().includes(search.toLowerCase())){
            return item
        }
       }).map((item)=>{
        return(
            <StyledTableRow key={item.userId}>
              <StyledTableCell align="center">{item.email}</StyledTableCell>
              <StyledTableCell align="center">{item.mobile_no}</StyledTableCell>
              <StyledTableCell align="center">{item.gender}</StyledTableCell>
              <StyledTableCell align="center">{item.address}</StyledTableCell>
              <StyledTableCell align="center">{item.preferredlocations}</StyledTableCell>
              <StyledTableCell align="center">{item.preferredstores}</StyledTableCell>
              <StyledTableCell align="center">{item.preferreddays}</StyledTableCell>
              <StyledTableCell align="center">{item.preferredtimings}</StyledTableCell>
            </StyledTableRow>
        );
        })
           }  
         
        </TableBody>
      </Table>
    </TableContainer>

    </Paper>
        </div>
    );
};
export default Buddie;
