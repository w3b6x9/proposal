import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkedInButton = () => {
  return (
    <a href={ 'https://www.linkedin.com/in/wenboxie' }
      target='_blank'
      className='panel-profile-link'>
      <i className="fa fa-linkedin-square linkedin-icon" aria-hidden="true" />
      <div className='panel-profile-btn'>
        <div className='panel-profile-name'>
          LinkedIn
        </div>
      </div>
    </a>
  );
};

export default LinkedInButton;
