
import React, { useRef, useEffect } from 'react';
import jsimage from '../public/javascript.jpeg';
import pythonimage from '../public/python.jpeg';
import reactimage from '../public/react.jpeg';
import nodeimage from '../public/node.jpeg';
import javaimage from '../public/java.jpeg';
import djangoimage from '../public/django.jpeg';
import cppimage from '../public/cpp.jpeg';

const Skills = () => {
  const skillCircleRefs = useRef([]);
  const [currentCircle, setCurrentCircle] = React.useState(null);

  useEffect(() => {
    skillCircleRefs.current.forEach((circle, index) => {
      let rotationX = 0;
      let rotationY = 0;

      circle.addEventListener('mousedown', (e) => {
        if (currentCircle !== index) {
          // Remove event listeners from other circles
          skillCircleRefs.current.forEach((c, i) => {
            if (i !== index) {
              c.removeEventListener('mousemove', null);
              c.removeEventListener('mouseup', null);
            }
          });

          setCurrentCircle(index);
        }

        let startX = e.clientX;
        let startY = e.clientY;

        document.addEventListener('mousemove', (e) => {
          rotationX += (e.clientY - startY) * 0.1;
          rotationY += (e.clientX - startX) * 0.1;
          startX = e.clientX;
          startY = e.clientY;

          circle.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });

        document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', null);
        });
      });
    });
  }, [currentCircle]);

  return (
    <div className="skills-container">
      <div className="section-heading">Programming Languages</div>
      <div className="skills-row">
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[0] = el)}
        >
          <img src={jsimage} alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[1] = el)}
        >
          <img src={pythonimage} alt="Python" />
          <span>Python</span>
        </div>
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[2] = el)}
        >
          <img src={javaimage} alt="Java" />
          <span>Java</span>
        </div>
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[3] = el)}
        >
          <img src={cppimage} alt="C++" />
          <span>C++</span>
        </div>
      </div>
      <div className="section-heading">Frameworks</div>
      <div className="skills-row">
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[4] = el)}
        >
          <img src={reactimage} alt="React" />
          <span>React</span>
        </div>
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[5] = el)}
        >
          <img src={nodeimage} alt="Node.js" />
          <span>Node.js</span>
        </div>
        <div
          className="skill-circle"
          ref={(el) => (skillCircleRefs.current[6] = el)}
        >
          <img src={djangoimage} alt="Django" />
          <span>Django</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

