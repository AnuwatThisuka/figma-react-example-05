import React from "react";
import "./Contract.css";
import IG from "../assets/image/ig.svg";
import Twitter from "../assets/image/twitter.svg";
import Email from "../assets/image/email.svg";

function Contract() {
   return (
      <div className="contract">
         <div className="contract-con">
            <div className="header-contract">
               <h1>Contact Me </h1>
               <p>get in touch</p>
            </div>
            <div className="img-contract">
               <div className="contract-info">
                  <img src={Twitter} alt="" />
               </div>
               <div className="contract-info">
                  <img src={IG} alt="" />
               </div>
               <div className="contract-info">
                  <img src={Email} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Contract;
