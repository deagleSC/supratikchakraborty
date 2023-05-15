import React from 'react';
import medal from '../assets/medal.png';
import './Achievements.css';

const Achievements = () => {
    return ( 
        <div className="achievements">
            <h2><b>Achievements</b></h2>

            <div className="achievements-wrapper row">
                <div className="achievement col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="achievement-content">
                    <img src={medal} alt="threeares"></img>
                    <p><b>Solved 300+ Leetcode Problems</b></p>
                    <small>Solved 300+ problems on Leetcode with a peak contests rating of 1667 (Top 20% across Leetcode users).</small>
                    </div>
                </div>
                <div className="achievement col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="achievement-content">
                    <img src={medal} alt="threeares"></img>
                    <p><b>Smart India Hackathon 2022 Finalist</b></p>
                    <small>Qualified to the Finals of Smart India Hackathon 2022 under Ministry of Rural Development, Govt. of India among 26 teams pan-India.</small>
                    </div>
                </div>
                <div className="achievement col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="achievement-content">
                    <img src={medal} alt="twitter"></img>
                    <p><b>Winter of Code - Top Contributor</b></p>
                    <small>Contributed to the Open Source project NeoAlgo for Winter of Code 2020 organized by GDSC NSEC and received the Top Contributor award.</small>
                    </div>
                </div>
                
                <div className="achievement col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="achievement-content">
                    <img src={medal} alt="threeares"></img>
                    <p><b>AGBI Health-Tech Grand Challenge Finalist</b></p>
                    <small>Worked with a team of 5 developers to build a Deep Learning solution for Skin Cancer Detection and qualified to the
finals of AGBI Digital HealthTech International Hackathon 2020.</small>
                    </div>
                </div>
                <div className="achievement col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="achievement-content">
                    <img src={medal} alt="threeares"></img>
                    <p><b>Hack for India - Young Innovator</b></p>
                    <small>Worked with a team of 6 developers on an IoT-based Med-Tech solution for a warm-able patient mattress and won the
Young Innovator Award at Hack For India 2020.</small>
                    </div>
                </div>
                <div className="achievement col-lg-4 col-md-6 col-sm-12 col-xs-12">
                    <div className="achievement-content">
                    <img src={medal} alt="threeares"></img>
                    <p><b>Featured in Top 3 Project Ideas</b></p>
                    <small>Presented a Smart-city solution for water conservation at IIEST Shibpur's Instruo 2019 and featured among the Top 3 podium finishers.</small>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Achievements;