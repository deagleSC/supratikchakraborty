import React from 'react';
import './Introduction.css';
import profilePicture from '../assets/profilePicture.jpg';
import resume from '../docs/SupratikChakrabortyCV.pdf';

const Introduction = () => {
    return ( 
        <div className="introduction">
            <img src={profilePicture} alt="profile"></img>
            <h2><b>Supratik Chakraborty</b></h2>
            <p>Software Developer | Smart India Hackathon 2022 Finalist | Open Source Enthusiast | ML-DL Explorer | GDSC Lead</p>

            <div className="socials">
                <a href="https://www.facebook.com/supratikchakraborty01/" target="_blank"><i className="fa-brands fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com/supratik.ch/" target="_blank"><i className="fa-brands fa-instagram fa-2x"></i></a>
                <a href="https://github.com/DeagleOfficial" target="_blank"><i className="fa-brands fa-github fa-2x"></i></a>
                <a href="https://www.linkedin.com/in/supratikch/" target="_blank"><i className="fa-brands fa-linkedin fa-2x"></i></a>
                <a href="mailto:supratikofficial1@gmail.com" target="_blank"><i className="fa-solid fa-envelope fa-2x"></i></a>
                <a href="https://twitter.com/itssupratik" target="_blank"><i className="fa-brands fa-twitter fa-2x"></i></a>
            </div>

            <div className="links">
                <a href={resume} target="_blank"><button className="btn btn-md">Resume</button></a>
                <a href="https://supratikchakraborty.medium.com/" target="_blank"><button className="btn btn-md">Blog</button></a>
            </div> 

        </div>
    )
}

export default Introduction;