import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Service from "./components/Service";
import Experience from "./components/Experience";

function App() {
   return (
      <>
         <Navbar />
         <Banner />
         <About />
         <Service />
         <Experience />
      </>
   );
}

export default App;
