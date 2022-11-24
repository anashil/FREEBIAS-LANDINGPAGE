import React from 'react'
import Icon from "../../assets/Assets/Group 1216.svg";
import Icon1 from "../../assets/Assets/Group 1215.svg";
import Icon2 from "../../assets/Assets/Group 1217.svg";
const Footer = () => {
  return (
    <>
    <div style={{boxShadow:"0px 10px 10px platinum",paddingBottom:"2rem",marginTop:"3rem",width:"75rem",height:"2rem",marginLeft:"3rem"}}>
        <span style={{marginTop:"5rem"}}>
    <span >
      <img style={{marginLeft:"12rem",marginTop:"1rem",backgroundColor:"pink",borderRadius:"50%",padding:"6px"}} src={Icon} alt="hello"/>
    </span>
    <span style={{marginLeft:"2rem",marginTop:"1rem",position:"absolute",top:"30rem"}}><span style={{fontWeight:"bold"}}>90+</span><span style={{position:"absolute",top:"1rem",right:"1px"}}>Users</span></span>
    </span>
    <span style={{marginLeft:"10rem"}}>
  
    <span>
      <img style={{marginLeft:"12rem",backgroundColor:"pink",marginTop:"1rem",borderRadius:"50%",padding:"6px"}} src={Icon1} alt="hello"/>
    </span>
    <span style={{marginLeft:"2rem",position:"absolute",marginTop:"1rem",top:"30rem"}}><span style={{fontWeight:"bold"}}>90+</span><span style={{position:"absolute",top:"1rem",right:"1px"}}>Users</span></span>
    </span>
    <span style={{marginLeft:"10rem"}}>
    <span >
      <img style={{marginLeft:"12rem",backgroundColor:"pink",marginTop:"1rem",borderRadius:"50%",padding:"6px"}} src={Icon2} alt="hello"/>
    </span>
    <span style={{marginLeft:"2rem",position:"absolute",marginTop:"1rem",top:"30rem"}}><span style={{fontWeight:"bold"}}>90+</span><span style={{position:"absolute",top:"1rem",right:"1px"}}>Users</span></span>
    </span>
    </div>
    </>
  )
}

export default Footer
