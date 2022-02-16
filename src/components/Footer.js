import React from "react";
import "./Footer.css";
import IG from "../assets/image/ig.svg";
import Twitter from "../assets/image/twitter.svg";
import Email from "../assets/image/email.svg";
function Footer() {
   return (
      <div className="footer">
         <div className="footer-con">
            <div className="header-footer">
               <h1>Anuwat</h1>
            </div>
            <div className="navbar-footer">
               <ul>
                  <li>
                     <a href="#footer">About</a>
                  </li>
               </ul>
               <ul>
                  <li>
                     <a href="#footer">Experience</a>
                  </li>
               </ul>
               <ul>
                  <li>
                     <a href="#footer">Service</a>
                  </li>
               </ul>
               <ul>
                  <li>
                     <a href="#footer">Portfolio</a>
                  </li>
               </ul>
               <ul>
                  <li>
                     <a href="#footer">Contract</a>
                  </li>
               </ul>
            </div>
            <div className="img-info-con-footer">
               <div className="info-con-footer">
                  <img src={IG} alt="" href="https://github.com" />
               </div>
               <div className="info-con-footer">
                  <img src={Twitter} alt="" />
               </div>
               <div className="info-con-footer">
                  <img src={Email} alt="" />
               </div>
            </div>
         </div>
         <div className="credit">
            <p>Design By © JacksCo. All right reserved & Code By Anuwat</p>
         </div>
      </div>
   );
}

export default Footer;
