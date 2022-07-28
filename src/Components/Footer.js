import React from "react";
import fbimg from "../images/Facebook Icon.png";
import igimg from "../images/Instagram Icon.png";
import twitterimg from "../images/Twitter Icon.png";
import githubimg from "../images/GitHub Icon.png";

export default function Footer() {
    return (
        <footer>
            <div className="footer__container"></div>
            <a href="https://www.facebook.com/sonj.karki" target="_blank" rel="noreferrer"><img src={fbimg} className="imgfb" alt="fb" /></a>            
            <a href="https://www.instagram.com/sanjay_karki9" target="_blank" rel="noreferrer"><img src={igimg} className="imgig" alt="ig" /></a>
            <a href="https://twitter.com/sanjay_karki9" target="_blank" rel="noreferrer"><img src={twitterimg} className="imgtwitter" alt="twitter" /></a>
            <a href="https://github.com/sanjay-karki" target="_blank" rel="noreferrer"><img src={githubimg} className="imggithub" alt="github" /></a>
        </footer>
    )
}