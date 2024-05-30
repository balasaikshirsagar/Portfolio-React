import React from "react";
import './About.css';

function About() {
  return (
    <div className="aboutContainer">
      <div className="about">About</div>

      <div className="aboutSection">
        <h3>Software Development Engineer Intern at Pixelvide</h3>
        <p>
          Implementing Full Stack Web Applications using HTML, CSS, JavaScript, 
          jQuery, ReactJS, Bootstrap for Frontend and PHP, Ajax, PostgreSQL for 
          Backend. Involved in Phases of Software Development Life Cycle (SDLC) 
          and Bug Fixing.
        </p>
      </div>

      <div className="aboutSection">
        <h3>Subject Matter Expert at Chegg</h3>
        <p>
          Assisted Students by solving Computer Science Related problems over 
          the topics like Computer Networks, Operating Systems, DBMS, DS ALGO 
          as a tutor.
        </p>
      </div>
    </div>
  );
}

export default About;
