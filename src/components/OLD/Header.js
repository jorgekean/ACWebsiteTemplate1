import React from "react";

import "./Header.css";

function Header() {
  return (
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <h1 class="logo mr-auto">
          <a href="index.html">
            <img src="/AC-header.png" alt="AC Logo"></img>
          </a>
        </h1>

        {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li class="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#about" class="get-started-btn scrollto">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;
