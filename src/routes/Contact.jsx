import React from 'react'
import './content.css'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact">
            <div className="fomad1">
                <div className="textco">
                    <h1>Contact Me</h1>
                    <p>Fell free to contact us and we will get back to you as soon as we can. </p>
                </div>
                
                    <div className="formco">
                        <form action="submit">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="E-mail" />
                            <input type="text" placeholder="Message" />
                            <button className="btn2 btnco">submit</button>
                        </form>

                    </div>
                </div>
                <div className="fomad">
                    <div className="adress">
                        <div className="con">
                            <h2>Connect With Me</h2>
                            <p>Mahimatrivedi@gmil.com</p>

                        </div>
                        <div className="adr">
                            <h2>Visit us</h2>
                            <p> Rajiv Gandhi Proudyogiki Vishwavidyalaya Airport Bypass Road,
                                Bhopal, Madhya Pradesh -462033</p>
                        </div>

                    </div>
                </div>
                </div>
                <Footer/>
    </div>

  )
}

export default Contact
