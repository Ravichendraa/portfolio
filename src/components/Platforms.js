import React from 'react';

const Platforms = () => {
  const platforms = [
    {
      name: 'GitHub',
      link: '(your GitHub link)'
    },
    {
      name: 'LinkedIn',
      link: '(your LinkedIn link)'
    },
    {
      name: 'Twitter',
      link: '(your Twitter link)'
    }
    // Add more platforms as needed
  ];

  return (
    <div className="platforms">
      <h2>Platforms</h2>
      <ul>
        {platforms.map((platform, index) => (
          <li key={index}>
            <a href={platform.link} target="_blank">{platform.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Platforms;
