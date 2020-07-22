import React, { Component } from "react";

class MiddleArea extends Component {
  state = {};
  render() {
    return (
      // <div class="container-sm my-custom-container">
      //   <h2>The Title goes here</h2>
      <div className="row p-3">
        <div className="col-3">
          <div className="custom-card  left-card ">
            <div className="">
              <h5 className=" text-center "> Left Title</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                Left Subtitle
              </h6>
              <p className="">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. "To assess the psychosocial
                impact of human papillomavirus (HPV) testing, colposcopy, and
                Pap-smear, as triage strategies after a Pap-smear with atypical
                squamous cells of undetermined significance (ASCUS). We also
                sought to evaluate the psychosocial impact based on the results
                of the strategies."
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 ">
          <div
            className="card center-card "
            // style={{ height: "50rem", overflowY: "scroll" }}
          >
            <div className="card-body">
              <h5 className="card-title ">Center Title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Subtitle</h6>
              <p className="card-text">
                animi at vel ullam beatae quasi velit error, accusamus
                blanditiis sed quos deserunt laudantium sunt deleniti neque
                iusto illo consequuntur explicabo alias delectus vero vitae!
                Odio, doloremque minus consectetur labore fugit sunt quia
                cupiditate velit? Nemo rerum nihil deleniti adipisci placeat
                error, qui eaque delectus dicta sequi aut, sint dolorum ducimus
                laboriosam earum obcaecati minus, et nisi asperiores voluptatum!
                Neque repellat voluptatibus dolorum laborum praesentium ipsum
                deleniti dignissimos! Eius id illum placeat provident rem
                consequatur accusantium possimus blanditiis. Voluptatibus
                numquam vel ea. Cumque neque corporis rem architecto aliquam
                laudantium magni distinctio consectetur pariatur quasi ab
                perferendis temporibus consequuntur, velit, libero itaque amet
                earum commodi quam facere atque. Accusamus voluptate,
                repellendus sit hic maiores excepturi iure dolorem nihil est
                nemo reiciendis? Eveniet earum soluta esse recusandae, odio rem
                iure nihil perspiciatis dolore exercitationem necessitatibus
                debitis ea temporibus accusantium maxime libero quasi sit aut
                tempora. Tempore id aliquid mollitia dicta ipsam ducimus est
                quis impedit nam distinctio cupiditate, consequuntur eligendi,
                commodi natus minima beatae quos provident adipisci
                exercitationem voluptates c
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="right-card shadow-lg ">
            <div className="card-body">
              <h5 className="card-title text-center ">Right Title</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">
                Subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. "To assess the psychosocial
                impact of human papillomavirus (HPV) testing, colposcopy, and
                Pap-smear, as triage strategies after a Pap-smear with atypical
                squamous cells of undetermined significance (ASCUS). We also
                sought to evaluate the psychosocial impact based on the results
                of the strategies."
              </p>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default MiddleArea;
