import React from 'react'
import img from "../../assets/Assets/Illustration 2.svg";
import group from "../../assets/Assets/Group 1120.svg";

const PartOne = () => {
  return (
    <>
    <span>
      <img style={{marginLeft:"12rem",marginTop:"3rem"}} src={img} alt="hello" />
    </span>
    <div style={{position:"absolute",right:"7rem",bottom:"-25rem"}}>
        <div style={{fontSize:"2rem",fontWeight:"bold",marginBottom:"1rem"}}>
    <div style={{marginTop:"1rem"}}>We Provide Many</div>
    <div >features You Can Use</div>
    </div>
    <div style={{marginBottom:"1rem"}}>You can explore the features that we provide with fun and</div>
    <div style={{marginBottom:"1rem"}}>have their own functions each feature.</div>
    <div style={{marginBottom:"1rem"}}><span><img style={{marginRight:"11px"}} src={group}/></span>Powerfull online protection.</div>
    <div style={{marginBottom:"1rem"}}><span><img style={{marginRight:"11px"}} src={group}/></span>Internet without borders.</div>
    <div style={{marginBottom:"1rem"}}><span><img style={{marginRight:"11px"}} src={group}/></span>Supercharged VPN</div>
    <div style={{marginBottom:"1rem"}}><span><img style={{marginRight:"11px"}} src={group}/></span>No specific time limits.</div>
    </div>
    </>
  )
}

export default PartOne
