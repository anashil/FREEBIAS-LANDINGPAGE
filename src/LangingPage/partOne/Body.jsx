import React from 'react'
import Facebook from "../../assets/Assets/Illustration 1.svg";
const Body = () => {
  return (
    <>
    <div style={{margin:"6rem 10rem"}}>
      <div style={{fontWeight:"bold",fontSize:"35px"}}>Want anything to be</div>
      <div style={{fontWeight:"bold",fontSize:"35px",marginBottom:"1.5rem"}}>easy with <span style={{fontWeight:"bolder"}}>LaslesVPN.</span></div>
      <div>Provide a network for all your needs with ease and fun using LaslesVPN</div>
      <div style={{marginTop:"7px"}}>discover interesting features from us</div>
      <button style={{boxShadow:"0px 10px 5px pink" , marginTop:"2rem",width:"8rem",height:"2.2rem",borderRadius:"5px",color:"white",backgroundColor:"red",border:"1px solid red"}}>Get Started</button>
    <div style={{marginLeft:"19rem",position:"absolute",top:"8rem"}}>    <img  src={Facebook} alt="Your SVG" />
</div>
    </div>
    </>
  )
}

export default Body
