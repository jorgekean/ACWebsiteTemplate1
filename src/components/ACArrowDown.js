import React from 'react'
import { Link } from 'react-router-dom';

import ArrowDownURL from "../img/arrowdown.png";

import "./ACArrowDown.css";

function ACArrowDown(props) {
    return (
        <div className="arrow-down d-flex justify-content-center">
        <span><Link to={props.nextURL}><img src={ArrowDownURL}></img></Link></span>
        </div>
    )
}

export default ACArrowDown
