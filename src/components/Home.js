import React from "react";

import "../components/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <TopNavigation></TopNavigation> */}
      <main className="home">
        <div className="home-background d-flex flex-row justify-content-center align-items-center">
        <div className="home-content">
          <div className="d-flex justify-content-center">
            <img src="/ACLogo-white.png" alt="Logo"></img>
          </div>

          <h3>
            Changing the IT industry landscape by creating the next possible
          </h3>  

           <h3 className="explore text-center">
            <Link to="/about" className="text-white">EXPLORE</Link> 
          </h3>           
        </div>

        
        </div>
      </main>
    </>
  );
}

export default Home;
