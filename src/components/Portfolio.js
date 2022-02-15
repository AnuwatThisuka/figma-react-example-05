import React from "react";
import Cover from "../assets/image/Cover 1.png";
import "./Portfolio.css";

function Portfolio() {
   return (
      <div className="portfolio">
         <div className="port-con-main">
            <div className="portfolio-container">
               <div className="header-port">
                  <h1>Recent Works</h1>
                  <p>My Portfolio</p>
               </div>
               <div className="btn-port">
                  <button clasName="all">All</button>
                  <button clasName="Design">Design</button>
                  <button clasName="web">Web</button>
               </div>
               <div className="container-port-info">
                  <div className="port-info-1">
                     <div className="header-port-info-1">
                        <p>Web Design Casino Vistuel</p>
                     </div>
                     <div className="img-show-info">
                        <img src={Cover} alt="" />
                     </div>
                     <div className="btn-view-more">
                        <button className="view-more">View More</button>
                     </div>
                  </div>
                  <div className="port-info-1">
                     <div className="header-port-info-1">
                        <p>Web Design Casino Vistuel</p>
                     </div>
                     <div className="img-show-info">
                        <img src={Cover} alt="" />
                     </div>
                     <div className="btn-view-more">
                        <button className="view-more">View More</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Portfolio;
