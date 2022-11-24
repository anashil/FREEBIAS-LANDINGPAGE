import React from 'react'
import YourSvg from '../../assets/Assets/Logo.svg';



const Header = () => {
  return (
    <>
    <div style={{marginTop:"25px",marginLeft:"34px"}}>
    <span style={{marginLeft:"8rem"}}>
    <img  src={YourSvg} alt="Your SVG" />
    </span>
    <span style={{marginLeft:"12rem",fontSize:"14px"}}>
        <span style={{marginRight:"2rem"}}>About</span>
        <span style={{marginRight:"2rem"}}>Features</span>
        <span style={{marginRight:"2rem"}}>Pricing</span>
        <span style={{marginRight:"2rem"}}>Testimonials</span>
        <span style={{marginRight:"2rem"}}>Help</span>
    </span>
    <span style={{marginLeft:"7rem"}}>
      <span style={{marginRight:"1rem",fontSize:"14px",fontWeight:"bold"}}>Sign in</span>
      <span style={{borderRadius:"16px",fontSize:"14px",border:"1px solid red",padding:"5px  35px",color:"red"}}>Sign Up</span>
    </span>
    </div>
    </>
  )
}

export default Header
