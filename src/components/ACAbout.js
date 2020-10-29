import React from 'react'

import ACTopHeader from "./ACTopHeader";
import ACArrowDown from "./ACArrowDown";
import "./ACAbout.css";


function ACAbout() {
    return (
        <>
            <ACTopHeader headername="About"></ACTopHeader>
            <main className="about d-flex flex-column justify-content-start">

                <div className="about-content">
                Automata Creo envisions itself as an enabler of all enterprises, especially to SMEs, 
                in realizing their full capacity in delivering their products and services. Moreover, we put our trust and confidence in 
                these entities that through empowered workforce technology, they will be able to attain maximum productivity and high engagement 
                rate of their people.</div>

              
            </main>          
           <ACArrowDown nextURL="/services"></ACArrowDown>
        </>
    )
}

export default ACAbout
