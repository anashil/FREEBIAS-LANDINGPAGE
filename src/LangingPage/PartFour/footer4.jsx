import React from 'react'
import group1 from "../../assets/Assets/Mask Group (1).svg";
import group2 from "../../assets/Assets/Mask Group (2).svg";
import group3 from "../../assets/Assets/Mask Group (3).svg";
import group4 from "../../assets/Assets/Mask Group (4).svg";
import group5 from "../../assets/Assets/Mask Group.svg";


const Footer4 = () => {
  return (
    <div style={{marginTop:"3rem"}}>
        <img style={{marginLeft:"15rem",marginBottom:"1.6rem"}} src={group5} alt=""/>
      <img style={{marginBottom:"2.5rem",marginLeft:"4rem"}} src={group1} alt=""/>
      <img style={{marginLeft:"4rem"}} src={group2} alt=""/>
      <img style={{marginBottom:"2.3rem",marginLeft:"4rem"}} src={group3} alt=""/>
      <img style={{marginBottom:"2.5rem",marginLeft:"4rem"}} src={group4} alt=""/>
      
    </div>
  )
}

export default Footer4
