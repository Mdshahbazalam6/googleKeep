import React from 'react'
import '../CSS/nav.css'

const Nav = () => {
  return (
  <div className="navbarBox">
    <div className="navbarchild logoImage">Connect </div>
    <div className="navbarchild navbarsecchild">
        <div className="navbarsecondmainContainer">

        <div className="navbarlinks">Our Story</div>
        <div className="navbarlinks">Membership</div>
        <div className="navbarlinks">Write</div>
        <div className="navbarlinks">Sign in</div>
        </div>

        <div className="navbarchild "id='getStartedButton' >Get Started</div>
    </div>

  </div>
  )
}

export default Nav