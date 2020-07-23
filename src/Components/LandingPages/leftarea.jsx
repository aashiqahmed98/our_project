import React, { Component } from "react";
import "./leftarea.css";

class LeftArea extends Component {
  state = {};
  render() {
    return (
      <div className="col-3">
        <div className="custom-card  left-card ">
          <div className="">
            <h5 className=" text-center "> Left Title</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Left Subtitle
            </h6>
            <p className="">
              Some quick example text to build on the card title and make up the
              bulk of the card's content. "To assess the psychosocial impact of
              human papillomavirus (HPV) testing, colposcopy, and Pap-smear, as
              triage strategies after a Pap-smear with atypical squamous cells
              of undetermined significance (ASCUS). We also sought to evaluate
              the psychosocial impact based on the results of the strategies."
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftArea;
