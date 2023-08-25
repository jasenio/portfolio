import bit from "../images/hey.png"
import  { useEffect } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
export const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      const desktop =  useMediaQuery({
        query: '(min-width: 1100px)'
    })
    return (
    <section id = "About" className = "About">
        <p data-aos= {desktop? "fade-right":"fade-down"} data-aos-duration="1500" className = "name">Hi, I'm <span>Jasenio</span></p>
        <p data-aos= {desktop? "fade-right":"fade-up"} data-aos-duration="2000"  className = "aboutDesc">I'm a senior in highschool learning front-end and back-end websites. I love learning and adding new techniques with each project I make.</p>
        <div data-aos= "flip-down" data-aos-duration="1500"  className = "avatar">
            <img src = {bit}></img>
        </div>
    </section>
    )
}