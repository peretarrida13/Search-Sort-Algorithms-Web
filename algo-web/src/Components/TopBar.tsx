import React from "react";
import logo from '../imgs/logo.png';
import './TopBar.css';

export function TopBar(){


    return(
        <div className="main-container">
            <div className="btn-container">
                <a href="sorting" className="btn">
                    Sorting Algorithms
                </a>
                <a href="searching" className="btn">
                    Searching Algorithms
                </a>
            </div>
            <div className="title-container">
                <p>
                    Searching and Sorting Visulitzation
                </p>
            </div>
            <div className="logo-container">
                <img alt="logo" src={logo} className="logo"/>
            </div>
        </div>
    )
}