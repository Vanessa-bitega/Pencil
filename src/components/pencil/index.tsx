
import React from "react";
import './index.css'
import Image from './assets/Me.gif'
const CreatePage = () => {
    
    return   <div className="cheeks">
    <div className="face">
    <nav>
        
        <ul>
            
            <li><a href="#">Abou Me</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact </a></li>
        </ul>
        {/* <a href="#" className="btn">Say Hi</a> */}
        <button className="btn"> Say Hi</button>
        </nav>

        <div className="header">
            <h1>I help businesses reach the Stars</h1>
            
        </div>
        <div className="footer">
        
        <p>Scroll to learn how</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m24 31.4 7.3-7.3-2.1-2.1-3.7 3.7v-9.1h-3v9.1L18.8 22l-2.1 2.1ZM24 
            44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 
            6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 
            4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7
             24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>
        </div>
        <div className='myimage'>
        
        <img src="https://cdn.dribbble.com/users/836931/screenshots/4281418/media/cbdf1a95ecf14136e968a7c8bb2198cf.gif" alt="wait until the page loads" />
        
        <p> With Digital Marketing,Social Media, <br /> User Generated Content and More</p>
        </div>
    </div>
        
    </div>
    
    
}
export default CreatePage