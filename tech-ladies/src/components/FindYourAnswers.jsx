import React from "react";
import threeWomenComputer from "../assets/3womencomputer.jpg"
import twoWomenCode from "../assets/2womencode.jpg"
import laughingComputer from "../assets/laughingcomputer.jpg"

export default function FindYourAnswers(){
    return(
    <main>
        <h1 className="answers-title">Find your answers :</h1>
        <ul className="answers-articles">
            <li><a><b>10 reasons why women should consider tech  career</b></a> </li>
            <img src={threeWomenComputer} alt="3 women talking at computer"/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia aut repudiandae porro. Distinctio similique ipsam consequatur placeat beatae ipsa, sint exercitationem corporis, magni reprehenderit minus nesciunt, aliquam culpa. Molestias suscipit facilis aperiam pariatur quaerat cum magni velit. Magnam id error repellendus facilis quia asperiores provident veritatis autem expedita deserunt. Doloribus nulla quas necessitatibus quibusdam, <a href="#">harum ducimus</a> quae dolorum, minus magnam soluta iure modi dolor ad! Omnis commodi voluptatem consequatur praesentium impedit perferendis, libero, eveniet eum eos aspernatur quas ut in est dolorem. Eos accusantium similique ab hic, quaerat nisi delectus saepe sed fugiat est ducimus, minima, quas illum aperiam.</p>

            <li><a><b>5 Myths about female web developers</b></a></li>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia aut repudiandae porro. Distinctio similique ipsam consequatur placeat beatae ipsa, sint exercitationem corporis, magni reprehenderit minus nesciunt, aliquam culpa. Molestias suscipit facilis aperiam pariatur quaerat cum magni velit. Magnam id error repellendus facilis quia asperiores provident veritatis autem expedita deserunt. Doloribus nulla quas necessitatibus quibusdam, <a href="#">harum ducimus</a> quae dolorum, minus magnam soluta iure modi dolor ad! Omnis commodi voluptatem consequatur praesentium impedit perferendis, libero, eveniet eum eos aspernatur quas ut in est dolorem. Eos accusantium similique ab hic, quaerat nisi delectus saepe sed fugiat est ducimus, minima, quas illum aperiam.</p>
                

            <li><a><b>How to get into the tech industry with no experience</b></a></li>
            <img src={twoWomenCode} alt="2 women coding"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia aut repudiandae porro. Distinctio similique ipsam consequatur placeat beatae ipsa, sint exercitationem corporis, magni reprehenderit minus nesciunt, aliquam culpa. Molestias suscipit facilis aperiam pariatur quaerat cum magni velit. Magnam id error repellendus facilis quia asperiores provident veritatis autem expedita deserunt. Doloribus nulla quas necessitatibus quibusdam, harum ducimus quae dolorum, minus magnam soluta iure modi dolor ad! Omnis <a href="#">commodi voluptatem </a>consequatur praesentium impedit perferendis, libero, eveniet eum eos aspernatur quas ut in est dolorem. Eos accusantium similique ab hic, quaerat nisi delectus saepe sed fugiat est ducimus, minima, quas illum aperiam.</p>

            <li><b><a>6 secrets for women’s success in the Tech industry </a></b></li>
            <img src={laughingComputer} alt="woman laughing at the computer"/> 
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente officia aut repudiandae porro. Distinctio similique ipsam consequatur placeat beatae ipsa, sint exercitationem corporis, magni reprehenderit minus nesciunt, aliquam culpa. Molestias suscipit facilis aperiam pariatur quaerat cum magni velit. Magnam id error repellendus facilis quia asperiores provident veritatis autem expedita deserunt. Doloribus nulla quas necessitatibus quibusdam, harum ducimus quae dolorum, minus magnam soluta iure <a href="#">modi dolor ad!</a> Omnis commodi voluptatem consequatur praesentium impedit perferendis, libero, eveniet eum eos aspernatur quas ut in est dolorem. Eos accusantium similique ab hic, quaerat nisi delectus saepe sed fugiat est ducimus, minima, quas illum aperiam.</p>
        </ul>
    </main>
    )
}