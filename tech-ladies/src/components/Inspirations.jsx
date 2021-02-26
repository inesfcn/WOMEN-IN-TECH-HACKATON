import React from "react";
import adaLovelace from "../assets/ada-lovelace.png"
import woman1 from "../assets/woman1.jpeg"
import woman2 from "../assets/woman2.jpeg"
import woman3 from "../assets/woman3.jpeg"

export default function Inspirations(){
    return(
    <main className="testimonials">
        <h1>Inspirations: </h1>
            <div className="testimonials-text">
                <h3 className="testimonials-title"><i>Read about these women experiences</i></h3>
            </div>
    
            <div className="individual-testimonial">
                <p className="job-title"><a href="#"><b>Ada Lovelace</b></a></p>
                <img src={adaLovelace} alt="ada lovelace"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus rem optio voluptates adipisci, quasi ratione error repellat, iste totam nesciunt, veniam explicabo. Assumenda esse aliquam aspernatur delectus recusandae magnam doloribus eaque, omnis minus architecto eveniet ipsum nemo hic molestias. A quam sed rerum, aspernatur eius cum unde sequi natus vero. Itaque quo nesciunt dolorum at amet voluptate consequuntur, magnam architecto! </p>
            </div >
    
            <div className="individual-testimonial">
                <p className="job-title"><a href="#"><b>Sara Mendez</b></a></p>
               <img src={woman1} alt="Sara Mendez"/>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus rem optio voluptates adipisci, quasi ratione error repellat, iste totam nesciunt, veniam explicabo. Assumenda esse aliquam aspernatur delectus recusandae magnam doloribus eaque, omnis minus architecto eveniet ipsum nemo hic molestias. A quam sed rerum, aspernatur eius cum unde sequi natus vero. Itaque quo nesciunt dolorum at amet voluptate consequuntur, magnam architecto! </p>
            </div >

            <div className="individual-testimonial">
                <p className="job-title"><a href="#"><b>Sarah Peterson</b></a></p>
                <img src={woman2} alt="sarah peterson"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus rem optio voluptates adipisci, quasi ratione error repellat, iste totam nesciunt, veniam explicabo. Assumenda esse aliquam aspernatur delectus recusandae magnam doloribus eaque, omnis minus architecto eveniet ipsum nemo hic molestias. A quam sed rerum, aspernatur eius cum unde sequi natus vero. Itaque quo nesciunt dolorum at amet voluptate consequuntur, magnam architecto! </p>
            </div>

            <div className="individual-testimonial">
                <p className="job-title"><a href="#"><b>Fatima Altbawe</b></a></p>
                <img src={woman3} alt="Fatima Altbawe"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus rem optio voluptates adipisci, quasi ratione error repellat, iste totam nesciunt, veniam explicabo. Assumenda esse aliquam aspernatur delectus recusandae magnam doloribus eaque, omnis minus architecto eveniet ipsum nemo hic molestias. A quam sed rerum, aspernatur eius cum unde sequi natus vero. Itaque quo nesciunt dolorum at amet voluptate consequuntur, magnam architecto! </p>
            </div>
    </main>
    )
}