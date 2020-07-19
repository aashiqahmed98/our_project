import React, { Component } from "react";

class MiddleArea extends Component {
  state = {};
  render() {
    return (
      // <div class="container-sm my-custom-container">
      //   <h2>The Title goes here</h2>
      <div className="row p-5">
        <div className="col-3 w-50 h-75 shadow-lg">Left</div>
        <div className="col-6 w-75 h-100 shadow-sm">
          <h3>Title goes here
          
          </h3>
          <hr/>
         
        </div>
        <div className="col-3 w-50 h-75 shadow-lg">Right</div>
      </div>
      // </div>
    );
  }
}

export default MiddleArea;
