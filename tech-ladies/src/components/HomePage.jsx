import React, { useState } from "react"
import womanTwoComputers from "../assets/woman-two-computers.jpg"

export default function HomePage({toggleDarkMode}){

    const logo = `{TechLadies}`
    const [toggleNewsletter, setToggleNewsletter] = useState(false)

    function handleToggle(){
        setToggleNewsletter(!toggleNewsletter)
    }

    return(
    <>
    <main className={!toggleDarkMode?"homepage":"homepage dark-mode-main"}>
        <div className="homepage-text">
            <h1>{logo}</h1>
            <h3><i>Find your inspiration</i></h3>
            <p className="mission"> We are inspiring women around the globe to explore their developing talents. You will be surprised how much you can do just with a little support. </p>
            <p className="eleven-num">11%</p>
            <p className="eleven">of developers are women, let us increase this number!</p>
            <button onClick={handleToggle}>Join our community </button>
        </div>

        <div className="homepage-img"> 
            <img src={womanTwoComputers} alt="woman two computers"/> 
        </div>

        {toggleNewsletter &&
        <div className="newsletter">
                <div className="close" onClick={handleToggle}><i class="fas fa-times"></i></div>
            <div className="newsletter-text">
                <div>
                    <h3>Subscribe to our Newsletter</h3>
                </div>
                <div className="name"> 
                    <input type="text" name="name" placeholder="Write your name"/>
                </div>
                <div className="email">
                    <input type="email" name="email" placeholder="Write your email"/>
                </div>
                <button type="submit">Submit</button>
            </div>
        </div>
        }
    </main>

    <footer>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
    </footer>
    </>



    
    )
}