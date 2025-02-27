import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div style={{ backgroundColor: "#050816" }} className="relative z-0">
          <div
            style={{
              backgroundImage: "url('/src/assets/herobg.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // padding: "15px 45px",
            }}
          >
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
