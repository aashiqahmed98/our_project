import React from "react";
import "./App.css";

// Components

import NavBar from  './components/navbar';
import Footer from "./components/footer";

// Landing Pages
import LeftArea from './components/LandingPages/leftarea';
import MiddleArea from './components/LandingPages/middlearea';
import RightArea from './components/LandingPages/rightarea';

// Admin Module
import LoginForm from './components/AdminModule/login_form';
import AdminDashboard from './components/AdminModule/admin_dashboard'; 



function App() {
  return (
    <React.Fragment>
    <NavBar />  

   
    <div className="row p-3">
        <LeftArea/>
        <MiddleArea/>
        <RightArea/>
        
        </div>  

    <Footer/>  
  

    {/* <AdminDashboard/>  */}
    {/* <LoginForm/> */}

    
    </React.Fragment>
  );
}

export default App;
