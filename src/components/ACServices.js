import React from "react";

import ACTopHeader from "./ACTopHeader";
import ACArrowDown from "./ACArrowDown";

import "./ACService.css";
import WDurl from "../img/services/WD.png";
import TCSurl from "../img/services/TCS.png";
import CSEurl from "../img/services/CSE.png";

function ACServices() {
  return (
    <>
       <ACTopHeader headername="Products and Services"></ACTopHeader>
    <div className="service d-flex flex-row justify-content-center align-items-end">
   
      {/* <div className="header-service">
        <div className="d-flex justify-content-center">
          <img src="/ACLogo-white.png" alt="Logo"></img>
        </div>

        <h3>
          Changing the IT industry landscape by creating the next possible
        </h3>
      </div> */}
      <div className="content-service d-flex flex-row justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <img src={WDurl} alt="Web Development"></img>
          <h3 className="mt-4 text-center">Web Development</h3>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src={CSEurl} alt="Customized Software Engineering"></img>
          <h3 className="mt-4 text-center">Customized Software Engineering</h3>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src={TCSurl} alt="Technology Consulting Services"></img>
          <h3 className="mt-4 text-center">Technology Consulting Services</h3>
        </div>
      </div>
    </div>

    <ACArrowDown nextURL="/services"></ACArrowDown>
    </>
  );
}

export default ACServices;
