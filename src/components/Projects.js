import  { useEffect } from "react";
import images from "./image";
import {ProjectList} from "./ProjectList";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
export const Projects = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
    <section  id = "Projects" className = "Projects">

        <p data-aos= "fade-right" data-aos-duration="500" className = "projectTitle">Projects </p>
        <div className ="projectList"> 
            {ProjectList.map((project)=>{
                        return <div data-aos= "zoom-in" data-aos-duration="500" className = "project">
                            <div className = "projectContainer">
                                <button onClick={() => {window.open(project.link, "_blank", "noreferrer")}}>
                                    <img src={project.image}></img>
                                </button>
                                <p>{project.title}</p>
                                <p className = "notice">Frontend mentor Challenge</p>
                                <p className = "desc">{project.desc}</p>
                                
                            </div>
                            <p className = "projectSkill">SKILL FOCUS</p>
                            <div className = "projectSkills">
                            {project.skills.map((image)=>{
                                return <img src = {image}/>
                            })}
                            </div>
                        </div>

                    })}
       </div>
    </section>
    )
}