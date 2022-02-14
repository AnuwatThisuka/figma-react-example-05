import React from "react";
import "./Navbar.css";
import Sun from "../assets/image/sun.svg";
function Navbar() {
   return (
      <div className="navbar">
         <div className="navbar-container">
            <div className="logo">
               <li>
                  <a href="#Somthing">Noé</a>
               </li>
            </div>
            <div className="items-nav-con">
               <div className="items-nav">
                  <ul>
                     <li>
                        <a href="#Something">About</a>
                     </li>
                     <li>
                        <a href="#Something">Experience</a>
                     </li>
                     <li>
                        <a href="#Something">Service</a>
                     </li>
                     <li>
                        <a href="#Something">Portfolio</a>
                     </li>
                     <li>
                        <a href="#Something">Contract</a>
                     </li>
                  </ul>
               </div>
               <div className="toggle-sun-drak">
                  <img src={Sun} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
