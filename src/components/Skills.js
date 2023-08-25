import {SkillList} from "./SkillList";
import  { useEffect } from "react";
import images from "./image";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
export const Skills = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <section id = "Skills" className = "Skills">
        <p data-aos= "fade-right" data-aos-duration="500" className = "skillsTitle">Skills </p>
        <div className ="skillList"> 
            {SkillList.map((skill)=>{
                        return <div data-aos= "zoom-in" data-aos-duration="500" className = "skill">
                            <p>{skill.title}</p>
                            <div className = "skillContainer">
                                <img src={skill.image}></img>
                            </div>
                        </div>

                    })}
       </div>
    </section>
    )
}