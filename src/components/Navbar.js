import { useMediaQuery } from "react-responsive";
import {useState} from "react";
import  { useEffect } from "react";
import AOS from "aos";
import {Link} from "react-scroll";
import "../../node_modules/aos/dist/aos.css";
export const Navbar = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const [Menu, setMenu] = useState(false);

    const desktop =  useMediaQuery({
        query: '(min-width: 1100px)'
    })
    return <div className = "Navbar">
        <div className = "header">
            <p>Jasenio</p>
        </div>
        {!desktop && <div className = "Menu">
            <button className = "menuButton" onClick = {() => {setMenu(!Menu)}}>
            {!Menu && <svg width="21" height="20" viewBox="0 0 16 15" preserveAspectRatio ="none" xmlns="http://www.w3.org/2000/svg" ><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#000000" fillRule="evenodd"/></svg>}
            {Menu && <svg width="20" height="20" viewBox="0 0 14 15" preserveAspectRatio ="none"  xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#000000" fillRule="evenodd"/></svg>}
            </button>
        </div>}
        {(Menu && !desktop) && <div data-aos="fade-left" data-aos-duration="1000" className = "dropDown">
            <div className = "Anchors"> 
                <Link onClick = {()=>{setMenu(!Menu)}}to ="About" smooth={true} duration = {1000}className = "AboutB">About</Link>
                <Link onClick = {()=>{setMenu(!Menu)}}to ="Skills" smooth={true} duration = {1000} className = "SkillsB">Skills</Link>
                <Link  onClick = {()=>{setMenu(!Menu)}}to ="Projects" smooth={true} duration = {1000}className = "ProjectsB">Projects</Link>
                <Link onClick = {()=>{setMenu(!Menu)}}to ="Contact" smooth={true} duration = {1000}className = "ContactB">Contact</Link>
                
                
                
             </div>
        </div> }

        
        {desktop && <div className = "Anchors"> 
            <Link to ="Contact" smooth={true} duration = {1000}className = "ContactB">Contact</Link>
            <Link  to ="Projects" smooth={true} duration = {1000}className = "ProjectsB">Projects</Link>
            <Link to ="Skills" smooth={true} duration = {1000} className = "SkillsB">Skills</Link>
            <Link to ="About" smooth={true} duration = {1000}className = "AboutB">About</Link>
        </div>}
        
    </div>
}