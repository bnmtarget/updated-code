// import ReactDOM from "react-dom/client";
// import React from 'react';
// //import './App.css';
// import { BrowserRouter, Routes,Route } from "react-router-dom";
// import Landing from './pages/landing/landing';
// import Login from './pages/login/login';
// import Signup from "./pages/signup/signup";
// import AboutUs from "./pages/aboutus/aboutus";
// import ContactUs from "./pages/contactus/contactus";
// //import Buddie from "./pages/findbuddies/table";
// import Buddie from "./pages/buddies/buddiespage";
// import Profile from "./pages/profile/profile";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing/>}></Route>
//         <Route path="/landing" element={<Landing/>}></Route>
//         <Route path="/login" element={<Login/>}></Route>
//         <Route path="/signup" element={<Signup/>}></Route>
//         <Route path="/aboutus" element={<AboutUs/>}></Route>
//         <Route path="/contactus" element={<ContactUs/>}></Route>
//         <Route path="/profile" element={<profile/>}></Route>
//         <Route path="/buddiespage" element={<Buddie/>}></Route>
//       </Routes>
//       </BrowserRouter> 
//      </>
//   );
// }

// export default App;

import ReactDOM from "react-dom/client";
import React from 'react';
//import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import Signup from "./pages/signup/signup";
import AboutUs from "./pages/aboutus/aboutus";
import ContactUs from "./pages/contactus/contactus";
import Profile from "./pages/profile/profile"

import EditProfile from "./pages/profile/editprofile";

//import Buddie from "./pages/findbuddies/table";
import Buddie from "./pages/buddies/buddiespage";
import { useState } from 'react';
import Button from '@material-ui/core/Button';
//import ModalDialog from "./pages/signup/modaldialog";

function App() {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
    {/* <div className="App">
    <Button variant="contained" color="primary" onClick={handleOpen}>
        Signup
      </Button>
      <ModalDialog open={open} handleClose={handleClose} />
    </div> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/landing" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/buddiespage" element={<Buddie/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>

        <Route path="/editprofile" element={<EditProfile/>}></Route>


      </Routes>
      </BrowserRouter> 
     </>
  );
}

export default App;