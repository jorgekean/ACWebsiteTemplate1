import React from "react";

function TopNavigation() {
  return (
    <nav class="navbar navbar-dark navbar-expand-lg navbar-fixed-top">
      {/* <a class="navbar-brand" href="#">
        Navbar w/ text
      </a> */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarText">
        <ul class="navbar-nav mr-auto d-flex flex-row justify-content-center w-100">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Team
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
        {/* <span class="navbar-text">Put icon links here?</span> */}
      </div>
    </nav>
  );
}

export default TopNavigation;
