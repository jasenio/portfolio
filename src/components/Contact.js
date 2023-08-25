import {SkillList} from "./SkillList";
import  { useEffect } from "react";
import images from "./image";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
export const Contact = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <section id = "Contact" className = "Contact">
        <p data-aos= "fade-right" className = "contactTitle">Contact </p>
        <div className ="contactList"> 
            <div data-aos="fade-right" data-aos-duration="500" className = "GitHub">
                <button onClick={() => {window.open("https://github.com/jasenio", "_blank", "noreferrer")}}>
                    <img src={images.github}></img>
                </button>
            </div>
            <div data-aos= "fade-right" data-aos-duration="500" className = "Insta">
                <button onClick={() => {window.open("https://www.instagram.com/jajakim11/", "_blank", "noreferrer")}}>
                    <img src={images.insta}></img>
                </button>
            </div>
            <div data-aos = "fade-right" data-aos-duration="500" className = "Email">
                <button onClick={() => {navigator.clipboard.writeText("jnichkim@gmail.com");
                        alert("Copied email to clipboard");
            
                    }}>
                    
                    <img src={images.email}></img>
                </button>
            </div>
       </div>
    </section>
    )
}