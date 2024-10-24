import React from 'react';
import './Profile.css'; // Import the separate CSS file

const Profile = () => {
  return (
    <div className="description-container">
      <h1 className="name-text">Jeevanantham P</h1> 
      <h2 className="header-text">About Me</h2>
      <p className="description-text">
        I am a <span className="highlight">tech enthusiast</span>, driven by curiosity and a desire to explore the latest advancements in technology.
      </p>
      <p className="description-text">
        <span className="highlight">Consistency</span> is key to my work ethic. I approach every task with dedication and focus, ensuring quality results.
      </p>
      <p className="description-text">
        I pride myself on being <span className="highlight">adaptable</span>, able to quickly learn and adjust to new tools and environments.
      </p>
      <p className="description-text">
        As an <span className="highlight">IT student</span> with a solid understanding of software development, I am eager to apply my skills in a professional environment, contributing to impactful projects while continuing to learn and grow in the field.
      </p>
    </div>
  );
};

export default Profile;
