import React from "react";

function HeroSection() {
  return (
    <section id="hero" class="d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Changing the IT Industry landscape</h1>
            <h2>by creating the next possible!</h2>
            <div class="d-flex">
              <a href="#about" class="btn-get-started scrollto">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                class="venobox btn-watch-video"
                data-vbtype="video"
                data-autoplay="true"
              >
                {" "}
                Watch Video <i class="icofont-play-alt-2"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src="assets/img/hero-img.png"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
