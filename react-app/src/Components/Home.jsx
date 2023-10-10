import React,{useEffect} from "react";
import Navbar from "./Navbar";
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
import bgImage from '../assets/Images/banner-bg.svg'
import serviceShape1 from '../assets/Images/services-shape.svg'
import serviceShape2 from '../assets/Images/services-shape-1.svg'
import serviceShape3 from '../assets/Images/services-shape.svg'
import serviceShape4 from '../assets/Images/services-shape-2.svg'
import serviceShape5 from '../assets/Images/services-shape.svg'
import serviceShape6 from '../assets/Images/services-shape-3.svg'
import finalWhite from '../assets/Images/Logo Final white.png'
import textimonialShape from '../assets/Images/textimonial-shape.svg'
import missionpart from '../assets/Images/about1.svg'
import vissionpart from '../assets/Images/about2.svg'
import missionback from '../assets/Images/about-shape-1.svg'
import vissionback from '../assets/Images/about-shape-2.svg'
import author1 from '../assets/Images/author-1.png'
import author2 from '../assets/Images/author-2.png'
import icon1 from '../assets/Images/icon.png'
import WOW from 'wowjs'


function Home() {

   
    const backgroundImageStyle = {
        backgroundImage: `url(${bgImage})`
    };

    return (
        <div>
            <Navbar/>
            <header className="header-area">
                
                <div id="home" className="header-hero bg_cover" style={backgroundImageStyle}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="header-hero-content text-center">
                                    <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">Where Tech Takes Care ©  </h2>
                                    <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">Empowering Lives by bringing positive Impact through Technology</p>
                                    <a href="#features" className="main-btn wow fadeInUp" style={{textDecoration:"none"}} data-wow-duration="1.3s" data-wow-delay="1.1s">Our Projects</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center" style={{ marginTop: '200px' }}>
                            <div className="wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "300px" }}>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div id="particles-1" className="particles"></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <img className="sample" src={finalWhite} alt="logofinalwhite" width="300" height="300" />
                   
                </div>
            </header>

            <section id="features" className="services-area pt-10">
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-10">

                            <div className="section-title text-center pb-40">
                                <h3 className="title"> Unveiling Tomorrow: "A Sneak Peek into Our Exciting Upcoming Projects "</h3>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src={serviceShape1} alt="shape" />
                                    <img className="shape-1" src={serviceShape2} alt="shape" />
                                    <i className="lni-baloon"></i>
                                </div>
                                <div className="services-content mt-30 h-50">
                                    <h4 className="services-title"><a href="#">Aslan</a></h4>
                                    <p className="text">This Project Aim for Improving Productivity of Students. Here we are combining Scientific Studies with Technology and joining small things to create a big Impact.</p>
                                    <a className="more" href="#">Visit <i className="lni-chevron-right"></i></a>
                                </div>
                            </div> {/* single services */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src={serviceShape3} alt="shape" />
                                    <img className="shape-1" src={serviceShape4} alt="shape" />
                                    <i className="lni-cog"></i>
                                </div>
                                <div className="services-content mt-30 h-50">
                                    <h4 className="services-title"><a href="#">Balina</a></h4>
                                    <p className="text">This Project aim to Build your Circle. More details to be disclosed.</p>
                                    <a className="more" href="#">Coming Soon<i className="lni-chevron-right"></i></a>
                                </div>
                            </div> {/* single services */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src={serviceShape5} alt="shape" />
                                    <img className="shape-1" src={serviceShape6} alt="shape" />
                                    <i className="lni-bolt-alt"></i>
                                </div>
                                <div className="services-content mt-30 h-50">
                                    <h4 className="services-title"><a href="#">Cennet Kusu</a></h4>
                                    <p className="text"></p>
                                    <a className="more" href="#">Coming Soon<i className="lni-chevron-right"></i></a>
                                </div>
                            </div> {/* single services */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
                <style jsx>{`
        .single-services {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .services-content {
            flex-grow: 1;
        }
    `}</style>
            </section>


            <section id="about" className="about-area pt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">MISSION</h3>
                </div>
                <p className="text">At Kraltek, we are on a mission to harness the power of technology to bring about positive changes in people's lives. Our journey began with a simple yet profound belief that even the smallest problems matter, and they deserve innovative solutions. We're committed to making a meaningful impact on the world by addressing everyday challenges through cutting-edge technology. Whether it's enhancing productivity, simplifying tasks, or improving overall well-being, Kraltek is here to make a difference.
</p>
               
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <img className="mission" src={missionpart} alt="about1" />
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <img className="mission1" src={missionback} alt="about-shape-1" />
        </div>
      </section>

      
      <section className="about-area pt-70">
        <div className="about-shape-2">
          <img classname="vision2" src={vissionback} alt="about-shape-2" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-last">
              <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">VISION</h3>
                </div>
                <p className="text">Our vision is a future where technology serves as a force for good, where even the most minor inconveniences have smart, efficient solutions. We envision a world where people can lead more fulfilling lives, unburdened by unnecessary challenges. Through our dedication to innovation and a relentless pursuit of excellence, we strive to be at the forefront of this transformative journey. At Kraltek, we see a brighter, more connected, and empowered world that our technology helps shape every day.</p>
               
              </div>
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <img className="vision" src={vissionpart} alt="about2" />
              </div>
            </div>
          </div>
        </div>
      </section>

            <section id="testimonial" className="testimonial-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto"></div>
                                <h3 className="title">WHAT WE HAVE TO SAY </h3>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation"></i>
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text ">
                                    <p className="text">As the CEO of Kraltek, I'm proud to lead a team dedicated to using cutting-edge technology to tackle everyday challenges, no matter how small. Our vision is a world where technology empowers individuals to lead more fulfilling lives, and we're committed to being at the forefront of this transformative journey.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src={textimonialShape} alt="shape" />
                                        <img className="author" src={author1} alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Ziyad K</h6>
                                        <p className="text">CEO, Kraltek</p>
                                    </div>
                                </div>
                            </div> {/* single testimonial */}
                        </div>
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation"></i>
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                            <li><i className="lni-star-filled"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text ">
                                    <p className="text">I'm passionate about creating intuitive and seamless experiences that leverage technology to enhance people's lives. Our mission drives me to craft designs that address even the smallest inconveniences, making a meaningful impact on how users interact with our products.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src={textimonialShape} alt="shape" />
                                        <img className="author" src={author2} alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Marjin Otte</h6>
                                        <p className="text">UI/UX Specialist</p>
                                    </div>
                                </div>
                            </div> {/* single testimonial */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
                <style jsx>{`
        .single-testimonial {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        
        .testimonial-text {
            flex-grow: 1;
        }
    `}</style>
            </section>

            <footer id="footer" className="footer-area pt-120">
                <div className="container">

                    <div className="footer-widget pb-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <a className="logo" href="#">
                                        <img src={icon1} alt="logo" />
                                    </a>

                                    <ul className="social">
                                        <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-instagram-filled"></i></a></li>
                                        <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                    </ul>
                                </div> {/* footer about */}
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-7">
                                <div className="footer-link d-flex mt-50 justify-content-md-between">
                                    <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                        <div className="footer-title">
                                            <h4 className="title">Quick Link</h4>
                                        </div>
                                        <ul className="link">
                                            <li><a style={{textDecoration:"none"}}  href="#">Home</a></li>
                                            <li><a style={{textDecoration:"none"}} href="#">Project</a></li>
                                            <li><a style={{textDecoration:"none"}} href="#">About us</a></li>
                                            <li><a style={{textDecoration:"none"}} href="#">Contact us</a></li>
                                            <li><a style={{textDecoration:"none"}} href="#">Blog</a></li>
                                        </ul>
                                    </div> {/* footer wrapper */}

                                    <div className="link-wrapper wow fadeIn">
                                        <div className="footer-contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                            <div className="footer-title">
                                                <h4 className="title">Contact Us</h4>
                                            </div>
                                            <ul className="contact">
                                                <li>+91 9526969798</li>
                                                <li>career@kraltek.in</li>
                                                <li>Info@kraltek.in</li>
                                                <li><a style={{ color: 'white',textDecoration:"none" }} href="#">Gform</a></li>
                                            </ul>
                                        </div> {/* footer contact */}
                                    </div>
                                </div> {/* row */}
                            </div> {/* footer widget */}
                        </div>
                    </div>

                    <div id="particles-2"></div>
                </div>
            </footer>

            {/* FOOTER PART ENDS */}

            {/* BACK TO TOP PART START */}
            <a href="#" className="back-to-top"><i className="lni-chevron-up"></i></a>


        </div>
    )
}

export default Home