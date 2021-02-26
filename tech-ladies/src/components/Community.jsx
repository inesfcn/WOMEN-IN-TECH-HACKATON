import React from "react";
import communityPic from "../assets/community.jpeg";

export default function Community(){
    return(
    <main>
        <div className="events-container">
            <div className="events-text">
                <h1 className="events-title">Upcoming Events :</h1>
                <ul>
                <li><a>Build your unique CV</a></li>
                <li><a>Casual Fridays </a></li>
                <li><a>Hackaton</a></li>
                <li><a>Phyton course</a></li>
                <li><a>Webinar impostor syndrome</a></li> 
                </ul>
            </div>
            <div className="events-img">
                 <img src={communityPic} alt="women together with computer"/> 
            </div>
        </div>
    </main>
    )
}