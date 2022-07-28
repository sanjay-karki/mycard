import React from "react";
import sanjayimg from "../images/sanjay-image.jpg";

export default function Info() {
    return (
        <section className="info__div">
            <img src={sanjayimg} alt="sanjayimg" />
            <h1>Sanjay Karki</h1>
            <h4>Project Manager</h4>
            <a href="mailto: saanu.karki97@gmail.com" className="email__ahref"><h5>saanu.karki97@gmail.com</h5></a>
            <div className="info__buttons"> 
                <a href="mailto: saanu.karki97@gmail.com" className="email__ahref"><button className="email__button"><i class="fa-solid fa-envelope"></i><text>Email</text></button></a>
                <a href="https://www.linkedin.com/in/sanjay-karki9/" className="linkedin__ahref" target="_blank" rel="noreferrer"><button className="linkedin__button"><i class="fa-brands fa-linkedin"></i><text>LinkedIn</text></button></a>
                
            </div>
        </section>
    )
}