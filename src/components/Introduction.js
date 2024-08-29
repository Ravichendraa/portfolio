
import React, { useEffect, useRef, useState } from 'react';
import backgroundImg from '../public/background.jpg';
import profileImage from '../public/profile-pic.jpg'; // Add your image here

function Introduction() {
  const typingText = useRef(null);
  const [textState, setTextState] = useState('');
  const text = "Mamidi Ravi Chendraa";
  const typingSpeed = 100; // adjust speed as needed

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < text.length) {
        setTextState(text.substring(0, index + 1));
        index++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
  }, [text, typingSpeed]);

  return (
    <div className="introduction">
      <div className="background-image" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
      <div className="content">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>
          I am <br/><span ref={typingText} className="highlighted-name">{textState}</span> <br /> 
        </h1>
        <p>Your brief introduction</p>
      </div>
    </div>
  );
}

export default Introduction;