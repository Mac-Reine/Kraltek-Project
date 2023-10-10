import React, { useEffect } from "react"
import myImage from '../assets/logo/icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/animate.css'
import '../assets/css/glightbox.min.css'
import '../assets/css/style.css'
import '../assets/css/tiny-slider.css'
import '../assets/css/magnific-popup.css'
import '../assets/css/slick.css'
import '../assets/css/LineIcons.css'
import '../assets/css/font-awesome.min.css'
import '../assets/css/default.css'

import WOW from 'wowjs'
function Navbar(){

    return(
        <div>
            {/* <div className="preloader">
        <div className="loader">
            <div className="ytp-spinner">
                <div className="ytp-spinner-container">
                    <div className="ytp-spinner-rotator">
                        <div className="ytp-spinner-left">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                        <div className="ytp-spinner-right">
                            <div className="ytp-spinner-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
            <header className="header-area">
    <div className="navbar-area d-flex justify-content-between">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="index.html">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={myImage} alt="Logo" width="55" height="55" />
                                <span style={{ marginLeft: '5px', color: 'white', fontWeight: 'bold' }}>Kraltek</span>
                            </div>
                        </a>
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                            <span className="toggler-icon"></span>
                        </button>
                         
                        <div className="collapse navbar-collapse sub-menu-bar ml-auto" id="navbarSupportedContent">
                        <ul id="nav" className="navbar-nav mx-auto">
                            
                                <li className="nav-item active">
                                    <a className="page-scroll"  style={{textDecoration:"none"}} href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll" style={{textDecoration:"none"}} href="#features">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll"style={{textDecoration:"none"}} href="#about">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="page-scroll"style={{textDecoration:"none"}} href="#contactus">Contact us</a>
                                </li>
                               
                                <li className="nav-item">
                                    <a className="page-scroll" style={{textDecoration:"none"}}href="#blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                       
                    </nav>
                </div>
            </div>
        </div>
                    <div id="particles-1" class="particles"></div>
    </div>
</header>

        </div>
    )
}

export default Navbar