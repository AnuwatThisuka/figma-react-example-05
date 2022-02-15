import React from "react";
import Business from "../assets/image/businees.svg";
import Hero from "../assets/image/Hero-2.svg";
import "./About.css";
function About() {
   return (
      <div className="about">
         <div className="about-info-con">
            <div className="about-container">
               <div className="about-info">
                  <h1>About Me</h1>
                  <p>My Intro</p>
               </div>
               <div className="info-con">
                  <div className="hero">
                     <img src={Hero} alt="" />
                  </div>
                  <div className="right-con">
                     <div className="ab-info">
                        <p>
                           Web developer, with extensive knowledge and years of
                           experience, working in web technologies and ui . Ux
                           design, delivering quality work
                        </p>
                     </div>
                     <div className="card-con">
                        <div className="card">
                           <li>
                              <a href="#Somthing">
                                 <div className="card-info">
                                    <img src={Business} alt="" />
                                    <h2>Completed</h2>
                                    <p>48 + Projects</p>
                                 </div>
                              </a>
                           </li>
                        </div>
                        <div className="card">
                           <li>
                              <a href="#Somthing">
                                 <div className="card-info">
                                    <img src={Business} alt="" />
                                    <h2>Completed</h2>
                                    <p>48 + Projects</p>
                                 </div>
                              </a>
                           </li>
                        </div>
                        <div className="card">
                           <li>
                              <a href="#Somthing">
                                 <div className="card-info">
                                    <img src={Business} alt="" />
                                    <h2>Completed</h2>
                                    <p>48 + Projects</p>
                                 </div>
                              </a>
                           </li>
                        </div>
                     </div>
                     <div className="btn-con">
                        <button className="btn btn-container">
                           Contact Me
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;
