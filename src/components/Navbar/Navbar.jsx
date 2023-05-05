import React, { useState } from 'react'
import './navbar.css';
import {RiMenu3Line,RiCloseLin, RiCloseLine, RiTruckLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'



const Navbar = () => {
  const [toggleMenu,settoggleMenu]=useState(false)
  return (
    <div className='gpt3__navbar'>
        <div className="gpt3__navbar-links">
            <div className="gpt3__navabar-links_logo"> 
            <img src={logo} alt="logo" />
            </div>
            <div className="gpt3__navabar-links_container">
            <p><a href="#home">Home</a></p>
               <p><a href="#wgpt3">What is GPT3</a></p>
               <p><a href="#features">Open AI</a></p>
               <p><a href="#features">Case Studies</a></p>
               <p><a href="#blog">Library</a></p>
            </div>
        </div>
      <div className="gpt3__navabar-sign">
        <p>SignIn</p>
        <button type='button'>SignUp</button>     
         </div>
         <div className='gpt3__navabar-menu'>
          {toggleMenu 
          ?<RiCloseLine color='#fff' size={27} onClick={()=>settoggleMenu(false)}/>
          :<RiMenu3Line color='#fff' size={27} onClick={()=>settoggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='gpt3__navabar-menu_container scale-up-center'>
              <div className="gpt3__navabar-menu_container_links">
              <p><a href="#home">Home</a></p>
               <p><a href="#wgpt3">What is GPT3</a></p>
               <p><a href="#possibility">Open AI</a></p>
               <p><a href="#features">Case Studies</a></p>
               <p><a href="#blog">Library</a></p>
                <div className="gpt3__navabar-menu_container-links-sign ">
                 <p>SignIn</p>
                    <button type='button'>SignUp</button>     
         </div>
              </div>
            </div>
          )}
         </div>
    </div>
  )
}

export default Navbar
