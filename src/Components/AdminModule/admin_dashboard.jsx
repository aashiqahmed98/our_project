import React, { Component } from "react";

import "./admindashboard.css";

class AdminDashboard extends Component {
  state = {};

  handleaddauthor = () => {
    console.log("just");
  };

  render() {
    return (
      <div
        className="container p-5 shadow-lg mt-3"
        style={{ overflowY: "auto" }}
      >
        <form action="" className="">
          <div className="form-group form-row ">
            <label
              for="articlename"
              className=" text-center col col-md-6 col-sm-12 col-form-label"
            >
              Article Name 
            </label>

            <input
              type="text"
              className="form-control col col-md-4 col-sm-12"
              id="articlename"
              placeholder="Name"
            ></input>
            {/* <div className="col btn btn-md-2 btn-sm-2 d-none"></div> */}

            <br />
          </div>
          <div className="form-group form-row">
            <label
              for="objectives"
              className="col col-md-6 text-center col-sm-10 col-form-label"
            >
              Objectives 
            </label>
            <textarea
              className="form-control col col-md-4 col-sm-12 "
              id="objectives"
              rows="3"
            ></textarea>
          </div>

          <br />

          <div className="form-group form-row ">
            <label
              for="authorname"
              className="col col-md-6 col-sm-10  text-center col-form-label"
            >
              Author Name 
            </label>
            <input
              type="text"
              className="form-control col col-md-4 col-sm-10 "
              id="authorname"
              placeholder="Author"
            ></input>
          </div>
          <br />
          <div className="form-group form-row ">
            <label
              for="pubname"
              className="col col-md-6 col-sm-10 col-form-label text-center"
            >
              Publisher Name 
            </label>
            <input
              type="text"
              className="form-control col col-md-4 col-sm-10"
              id="pubname"
              placeholder="Publisher"
            ></input>
          </div>
          <br />
          <div className="form-group form-row ">
            <label
              for="price"
              className="col col-md-6 col-sm-10 col-form-label text-center"
            >
              Price 
            </label>
            <input
              type="number"
              className="form-control col col-md-4 col-sm-10"
              id="price"
              placeholder="Price"
            ></input>
          </div>
          <br />

          <div className="form-group form-row ">
            <label
              for="choosefile"
              className="col col-md-6 col-sm-10 col-form-label text-center"
            >
              Choose Document 
            </label>
            <div className="form-input col col-md-4 col-sm-10">
              <input
                id="choosefile"
                type="file"
                className="form-control-file rounded btn-info"
              />
            </div>
          </div>
          <div className="form-group text-center  mt-5 ">
            <input
              className="btn btn-md post-btn btn-info"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AdminDashboard;
