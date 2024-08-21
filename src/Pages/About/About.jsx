import React from 'react';
import './about.scss';
import myImage from '../../assets/People/ragulraj.jpg';
import Button from '../../components/Button/Button';
import Resume from '../../assets/Pdf/Ragulraj_Resume.pdf';

const About = () => {
  return (
    <div className='page  about' name='About'>
      <div className="bg-image"></div>
      <div className="container flex-res">
        <div className='col-left'>
          <img src={myImage} alt="profile-pic" />
        </div>
        <div className="col-right">
           <h2>About</h2>
           <p>I’m a frontend developer passionate about creating sleek, user-friendly websites and applications. With expertise in HTML, Tailwind CSS, JavaScript, and modern frameworks like React, I bring designs to life and ensure a seamless user experience.</p>
           <div className='experience'><span>Experience:</span>
            <p>Frontend developer at Klickflow.<br/>
            Oct, 2022 - Jun, 2024.</p>
           </div>
           <Button buttonLInk={Resume} buttonText={'Resume'} />
        </div>
      </div>
    </div>
  )
}

export default About