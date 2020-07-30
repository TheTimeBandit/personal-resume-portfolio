import React from "react";
import "./Landing.scss";

function Navigation() {
  return (
    <nav>
      <a href="#Profile">Profile</a>
      <a href="#Education">Education</a>
      <a href="#Experience">Experience</a>
      <a href="#Skills">Skills</a>
      <a href="#Projects">Projects</a>
    </nav>
  );
}

export function Landing() {
  return (
    <div id="LandingPage" className="vignette">
      <div className="mask-dark">
        {/* TODO separate from Landing */}
        <Navigation />
      </div>
    </div>
  );
}
