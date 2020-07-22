import React from "react";

// Components
import NavBar from  './components/navbar';
import MiddleArea from './components/middlearea';
import Footer from "./components/footer";
import AdminDashboard from './components/admin_dashboard';
import LoginForm from './components/login_form';

// import logo from "./logo.svg";
import "./App.css";


function App() {
  return (
    <React.Fragment>
      {/* <NavBar />   */}
    {/*<MiddleArea/>
    <Footer/>  */}

    {/* <AdminDashboard/>  */}

    <LoginForm/>
    </React.Fragment>
  );
}

export default App;
