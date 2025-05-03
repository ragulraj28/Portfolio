import React from 'react';
import './projects.scss';
import wehrProject from '../../assets/Images/WeHr-05-01-2025_02_33_PM.jpg';
import soudemyProject from '../../assets/Images/Soudemy-05-01-2025_03_08_PM.jpg';
import ecomm from '../../assets/Images/Mini-eCommerce-05-01-2025_04_46_PM.jpg';
import rewardifyProject from '../../assets/Images/Rewardify-05-03-2025_03_53_PM.jpg';
import Button from '../../components/Button/Button';

const Projects = () => {

  return (
    <div className='page projects' name='Projects'>
      <div className="bg-image"></div>
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <div className="project-card">
            <a href='https://rewardifyvendor.netlify.app/' target="_blank" rel="noreferrer">
              <figure>
                <img src={rewardifyProject} alt="rewardify" />
              </figure>
            </a>
            <p>Rewardify - React</p>
            <Button buttonText={"Github"} onClick={() => window.open("https://github.com/ragulraj28/Rewardify", "_blank")}/>
          </div>
          <div className="project-card">
            <a href='https://wehr.netlify.app/' target="_blank" rel="noreferrer">
              <figure>
                <img src={wehrProject} alt="wehr" />
              </figure>
            </a>
            <p>WeHr - React</p>
            <Button buttonText={"Github"} onClick={() => window.open("https://github.com/ragulraj28/wehr-hrm", "_blank")}/>
          </div>
          <div className="project-card">
            <a href='https://soudemy.netlify.app/' target="_blank" rel="noreferrer">
              <figure>
                <img src={soudemyProject} alt="soudemy" />
              </figure>
            </a>
            <p>Soudemy - Simple JS Website</p>
            <Button buttonText={"Github"} onClick={() => window.open("https://github.com/ragulraj28/internship-soudemy-task", "_blank")}/>
          </div>
          <div className="project-card">
            <a href='https://minicomm.netlify.app/' target="_blank" rel="noreferrer">
              <figure>
                <img src={ecomm} alt="ecomm" />
              </figure>
            </a>
            <p>miniEcommerce - Fullstack</p>
            <Button buttonText={"Github"} onClick={() => window.open("https://github.com/ragulraj28/mini-ecommerce", "_blank")}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects