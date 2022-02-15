import React from "react";
import Check from "../assets/image/checkbox.svg";
import "./Service.css";

function Service() {
   return (
      <div className="service1">
         <div className="service-con1">
            <div className="header-con1">
               <h1>What I Offer</h1>
               <p>My Services</p>
            </div>
            <div className="service-info-con1">
               <div className="info-container1">
                  <div className="info-1con1">
                     <div className="header-info1">
                        <img src={Check} alt="" />
                        <p>Creation of a website design</p>
                     </div>
                  </div>
                  <div className="info-1-11">
                     <p>
                        You want to launch your website, you need a new design
                        for your future site? Contact me and we will discuss
                        your needs and desires.{" "}
                     </p>
                  </div>
                  <div className="btn-container1">
                     <button className="btn btn-container1">Contact Me</button>
                  </div>
               </div>
               <div className="info-container1">
                  <div className="info-11">
                     <div className="header-info1">
                        <img src={Check} alt="" />
                        <p>Creation of a website design</p>
                     </div>
                  </div>
                  <div className="info-1-11">
                     <p>
                        You want to launch your website, you need a new design
                        for your future site? Contact me and we will discuss
                        your needs and desires.{" "}
                     </p>
                  </div>
                  <div className="btn-container1">
                     <button className="btn btn-container1">Contact Me</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Service;
