import React from "react"
import womanTwoComputers from "../assets/woman-two-computers.jpg"

export default function HomePage(){

    const logo = `{TechLadies}`

    return(
    <main className="homepage">
        <div className="homepage-text">
            <h1>{logo}</h1>
            <h3><i>Find your inspiration</i></h3>
            <p className="mission"> We are inspiring women around the globe to explore their developing talents. You will be surprised how much you can do just with a little support. </p>
            <p className="eleven-num">11%</p>
            <p className="eleven">of developers are women, let us increase this number!</p>
            <button>Join our community </button>
        </div>
        <div className="homepage-img"> 
            <img src={womanTwoComputers} alt="woman two computers"/> 
        </div>

       {/* <div className="newsletter-form">
            <input type="text" placeholder="name">
            <input type="email" placeholder="Email">
        </div> */}
    </main>
    )
}