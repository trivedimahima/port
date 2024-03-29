import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    
        <header className="header">
           <Link to=''>Protfolio</Link>
           <nav className="navbar">
           
            <Link to='/' >Home</Link>
            <Link  to='' >About</Link> 
            <Link to='' >Services</Link> 
            <Link to='contact' >Contact </Link> 
           
           </nav>
        
        
       
    </header>
      // <script>

      // var navLinks = document.getElementById("navLinks");
      
      // function showMenu(){
      //     navLinks.style.right = "0";
      // }
      // function hideMenu(){
      //     navLinks.style.right = "-200px";
      // }
      
      // </script>
    
  )
}

export default Navbar
