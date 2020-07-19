import React from "react";

// Components
import NavBar from  './Components/navbar';
import MiddleArea from './Components/middlearea';
// import logo from "./logo.svg";

import "./App.css";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <br/>
      <MiddleArea/>
    </React.Fragment>
  );
}

export default App;
