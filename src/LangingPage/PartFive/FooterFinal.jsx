import React from 'react'
import logo from "../../assets/Assets/Logo.svg";
import logo1 from "../../assets/Assets/Facebook.svg";
import logo2 from "../../assets/Assets/Twitter.svg";
import logo3 from "../../assets/Assets/Instagram.svg";

const FooterFinal = () => {
  return (
    <div style={{display:"flex",marginTop:"4rem",marginBottom:"12rem"}}>
    <div style={{marginLeft:"2rem"}}>
      <img style={{marginLeft:"3rem",marginTop:"3rem"}} src={logo}/>
      <p style={{marginLeft:"3rem",fontSize:"12px"}}>LaslesVPN is a private virtual network that </p>
      <p style={{marginLeft:"3rem",fontSize:"12px"}}>has unique features and has high security.</p>
      <div style={{display:"flex"}}>
      <img style={{marginLeft:"3rem",marginTop:"1rem"}} src={logo1}/>
      <img style={{marginLeft:"3rem",marginTop:"1rem"}} src={logo2}/>
      <img style={{marginLeft:"3rem",marginTop:"1rem"}} src={logo3}/>

      </div>
      <p style={{color:"gray",marginLeft:"3rem",fontSize:"14px",fontWeight:"bold"}}>@2020LaslesVPN</p>
    </div>
    <div style={{marginLeft:"26rem"}}>
        <p style={{fontWeight:"bold",fontSize:"22px"}}>Product</p>
        <div style={{fontSize:"15px"}}>
        <p>Download</p>
        <p>Pricing</p>
        <p>Locations</p>
        <p>Server</p>
        <p>Countries</p>
        <p>Blog</p>
        </div>
    </div>
    <div style={{marginLeft:"7rem"}}>
        <p style={{fontWeight:"bold",fontSize:"22px"}}>Engage</p>
        <div style={{fontSize:"15px"}}>
        <p>LasiesVPN?</p>
        <p>FAO</p>
        <p>Tutorials</p>
        <p>About US</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        </div>
    </div>
    <div style={{marginLeft:"6rem"}}>
        <p style={{fontWeight:"bold",fontSize:"22px"}}>Earn Money</p>
        <div style={{fontSize:"15px"}}>
        <p>Affitiate</p>
        <p>Vecome Partner</p>
        
        </div>
    </div>
    </div>
  )
}

export default FooterFinal
