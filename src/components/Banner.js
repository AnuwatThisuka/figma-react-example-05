import React from "react";
import "./Banner.css";
import Hero from "../assets/image/Hero.svg";

function Banner() {
   return (
      <div className="banner">
         <div className="banner-container">
            <div className="banner-con-info">
               <div className="name">
                  <div className="say">
                     <p>Hello, I’m</p>
                  </div>
                  <div className="username">
                     <p>Anuwat</p>
                  </div>
                  <div className="skill">
                     <p>Ui/Ux Designer</p>
                  </div>
               </div>
               <div className="btn">
                  <div className="btn-download">
                     <button className="btn-cv">Download CV</button>
                  </div>
                  <div className="btn-About">
                     <button className="btn-about">About me</button>
                  </div>
               </div>
               <div className="Hero">
                  <div className="Hero-con">
                     <img src={Hero} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Banner;
