
import React from 'react';
// import backgroundImg from '../public/background.jpg';
import btechLogo from '../public/btech-logo.jpeg';
import sscLogo from '../public/sscLogo.jpeg';
import hscLogo from '../public/hscLogo.jpeg';

function AboutMe() {
  return (
    <div className="about-me">
      <h1><center>About Me</center></h1>
      <Timeline />
    </div>
  );
}

function Timeline() {
  return (
    <div className="timeline">
      <div className="card timeline-card">
        <div className="card-header">
          <img src={btechLogo} alt="B.Tech Logo" className="card-image" />
          <h2 className="card-title">B.Tech in Computer Science and Engineering</h2>
        </div>
        <div className="card-details">
          <p>Indian Institute of Information Technology Design and Manufacturing, Jabalpur</p>
          {/* <p>Computer Science and Engineering</p> */}
          <p>Dec 2021 – Present</p>
          <p>CGPA : 7.75/10</p>
        </div>
      </div>
      <div className="card timeline-card">
        <div className="card-header">
          <img src={hscLogo} alt="HSC Logo" className="card-image" />
          <h2 className="card-title">HSC</h2>
        </div>
        <div className="card-details">
          <p>Sri Chaitanya Junior College, Hyderabad</p>
          <p>Jun 2019 – Apr 2021</p>
          <p>Percentage: 97.2%
          </p>
        </div>
      </div>
      <div className="card timeline-card">
        <div className="card-header">
          <img src={sscLogo} alt="SSC Logo" className="card-image" />
          <h2 className="card-title">SSC</h2>
        </div>
        <div className="card-details">
          <p>Sri Chaitanya School, Hyderabad</p>
          <p>Jun 2018 – Apr 2019</p>
          <p>CGPA : 9.8/10</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

