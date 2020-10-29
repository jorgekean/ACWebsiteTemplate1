import React from "react";

function Featured() {
  return (
    <section id="featured-services" class="featured-services">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box">
              <div class="icon">
                <i class="icofont-computer"></i>
              </div>
              <h4 class="title">
                <a href="">Web Development</a>
              </h4>
              <p class="description">
                Through close collaboration with our clients, web development is
                now more interactive, user-friendly, and aesthetically appealing
                to the viewers. We make sure that our works reflect the idea and
                message of our clients to their target markets.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon">
                <i class="icofont-image"></i>
              </div>
              <h4 class="title">
                <a href="">Customized Software Engineering</a>
              </h4>
              <p class="description">
                Powered with new trends and technologies, our software
                engineering will enable businesses achieve optimal business
                productivity. Our products are created based on the mutually
                agreed workflows incorporated with the industry’s best
                practices.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon">
                <i class="icofont-tasks-alt"></i>
              </div>
              <h4 class="title">
                <a href="">Technology Consulting Services</a>
              </h4>
              <p class="description">
                As business requirements continuously evolve over time, our
                technology should be able to adapt in a manner that it will
                create an additional value to all our stakeholders. Spearheaded
                by our team of technological and innovative experts, we vow to
                help businesses meet their desired process / system efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Featured;
