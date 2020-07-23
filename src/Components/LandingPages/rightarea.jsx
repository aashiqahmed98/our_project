import React, { Component } from "react";

import "./rightarea.css";

class RightArea extends Component {
  state = {};
  render() {
    return (
      <div className="col-3">
        <div className="right-card shadow-lg ">
          <div className="card-body">
            <h5 className="card-title text-center ">Right Title</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center">
              Subtitle
            </h6>
            <p className="card-text">
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

export default RightArea;
