import React from 'react';
import threeares from '../assets/threeares.png';
import twitter from '../assets/twitter.png';
import dermado from '../assets/dermado.png';
import oasis from '../assets/oasis.png';
import cryptowatch from '../assets/cryptowatch.png';
import ambience from '../assets/ambience.png';
import './Projects.css';

const Projects = () => {
    return ( 
        <div className="projects">
            <h2><b>Projects</b></h2>

            <div className="projects-wrapper row">
                <div className="project col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/DeagleOfficial/threeares-sih.git" target="_blank">
                    <div className="project-content">
                    <img src={threeares} alt="threeares"></img>
                    <p><b>Threeares</b></p>
                    <small>An ecommerce website where all products(paperbacks, home appliances, accessories, etc.) are manufactured from recyclables, along with a web-based GHG emissions estimator.</small>
                    </div>
                    </a>
                </div>
                <div className="project col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/DeagleOfficial/twitterclone.git" target="_blank">
                    <div className="project-content">
                    <img src={twitter} alt="twitter"></img>
                    <p><b>Twitter Clone</b></p>
                    <small>A social media web application based on twitter developed using React JS and Firebase, with functionalities for CRUD operations on a NoSQL database (Firestore).</small>
                    </div>
                    </a>
                </div>
                <div className="project col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/DeagleOfficial/dermado-app.git" target="_blank">
                    <div className="project-content">
                    <img src={dermado} alt="threeares"></img>
                    <p><b>Dermado</b></p>
                    <small>Web-based solution for Skin Cancer Detection & Lesion Classification using Convolutional Neural Networks (CNNs), developed using a React JS frontend and a Flask backend.</small>
                    </div>
                    </a>
                </div>
                <div className="project col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/DeagleOfficial/oasis.git" target="_blank">
                    <div className="project-content">
                    <img src={oasis} alt="threeares"></img>
                    <p><b>Oasis</b></p>
                    <small>A journaling & note-taking web application with JWT (JSON Web Token) Authentication built using MongoDB, Express, Node JS, React JS (MERN) stack.</small>
                    </div>
                    </a>
                </div>
                <div className="project col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/DeagleOfficial/cryptowatch.git" target="_blank">
                    <div className="project-content">
                    <img src={cryptowatch} alt="threeares"></img>
                    <p><b>Cryptowatch</b></p>
                    <small>A real-time crypto tracking web-app with search-by-coin functionality built with React JS using the Open Source Coinstats API.</small>
                    </div>
                    </a>
                </div>
                <div className="project col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <a href="https://github.com/DeagleOfficial/ambience-weather.git" target="_blank">
                    <div className="project-content">
                    <img src={ambience} alt="threeares"></img>
                    <p><b>Ambience</b></p>
                    <small>A Weather Web Application with functionality for location-based search developed using React JS and the OpenWeatherMap API.</small>
                    </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Projects;