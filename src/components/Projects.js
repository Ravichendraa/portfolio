import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A brief description of Project 1',
      techStack: ['React', 'Node.js', 'MongoDB'],
      link: '(link unavailable)'
    },
    {
      name: 'Project 2',
      description: 'A brief description of Project 2',
      techStack: ['JavaScript', 'HTML/CSS', 'Bootstrap'],
      link: '(link unavailable)'
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Tech Stack: {project.techStack.join(', ')}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;