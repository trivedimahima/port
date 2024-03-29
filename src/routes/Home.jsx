import React from 'react'
import Navbar from './Navbar';
import img from './img.jpg'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import Footer from './Footer';
import './home.css'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div >
      <Navbar />
      <div className="head">
        <div className="text">
          <div className="heed">
            <h1>Hi There,</h1>
            <h2>I'm <spam>Mahima Trivedi</spam></h2>
          </div>
          <div className="para">
            <p>I Am <spam>Web Developer &  Graphics Designer </spam> </p>
          </div>

          <a href="#sec" className="btn">About Me</a>
          <div className="icons">
          <IoLogoInstagram size={20}/>
          <FaFacebook  size={20}/>
          <BsTwitterX  size={20}/>
          <FaLinkedin  size={20}/>
          </div>

        </div>
        <div className="img">
          <div className="card">
            <img src={img} alt="" />
          </div>
        </div>

      </div>

      <main className='card-container ' id='sec'>
        <div className="h">
          <h4>My Expertise</h4>
        </div>
        <div className="mahi">
        <div className="carrd">
          <img src={img1} alt="" />
          <div className="card-content">
            <h3>Web Developer</h3>
            <p>I specialize in responsive web development, crafting dynamic and user-friendly websites. With expertise in HTML, CSS, JavaScript, and frameworks like React, I create engaging online experiences. Let's collaborate to bring your ideas to life!.</p>
           
          </div>
        </div>

        <div className="carrd">
          <img src={img2} alt="" />
          <div className="card-content">
            <h3>Graphics Designer</h3>
            <p>With a keen eye for aesthetics and creativity, I specialize in crafting visually stunning designs. From captivating logos to eye-catching illustrations, I bring ideas to life with precision and style. Let's collaborate and elevate your brand's visual identity!</p>
            
          </div>
        </div>

        <div className="carrd">
          <img src={img3} alt="" />
          <div className="card-content">
            <h3>Media & Management</h3>
            <p>I'm passionate about creating compelling stories through various mediums. From captivating articles to engaging social media content, I excel in crafting impactful narratives. Let's connect and elevate your brand's message together!</p>
            
          </div>
        </div>
        </div>
      </main>
     
      <Footer />
      </div>
  );
}

export default Home


