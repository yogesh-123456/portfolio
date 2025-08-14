import React from 'react'
import './About.css'
import theme_pattern  from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/myprofile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>"I'm a passionate and self-driven Computer Science student with hands-on experience in full-stack web development using the MERN stack. I love building scalable, responsive, and user-friendly web applications. My projects reflect my focus on clean design, efficient code, and real-world problem solving. I’m currently seeking opportunities to contribute to impactful teams and grow as a developer."</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"100%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"100%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"100%"}} /></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"100%"}} /></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"100%"}} /></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"100%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>5+</h1>
                <p>MONTHS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>6+</h1>
                <p>TECHNOLOGIES USED</p>
            </div>
        </div>
    </div>
  )
}

export default About