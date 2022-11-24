import React from 'react'
import logo from "../../assets/Assets/Free.svg";
const Pic = () => {
  return (
    <div style={{display:"flex",marginLeft:"2rem",marginTop:"4rem"}}>
    <div style={{border:"2px solid grey",width:"16rem",marginLeft:"7rem",borderRadius:"15px",marginTop:"5rem"}}>
    <div style={{marginLeft:"4rem",marginTop:"5rem"}}>
      <img src={logo} alt="bhjb"/>
      <div style={{fontSize:"14px",marginTop:"2rem"}}>
      <div style={{fontWeight:"bold",marginTop:"1rem",fontSize:"20px",marginLeft:"1rem"}}>Free Plan</div>
      <div style={{marginTop:"1.5rem"}}>Unlimited Bandwitch</div>
      <div style={{marginTop:"1rem"}}>Encrypted Connection</div>
      <div style={{marginTop:"1rem"}}>No traffic Logs</div>
      <div style={{marginTop:"1rem"}}>Works on all devices</div>
      </div>
    </div>
    <div style={{marginLeft:"4.5rem",marginTop:"9rem"}}>
    <div style={{fontWeight:"bold",fontSize:"20px",marginLeft:"27px"}}>Free</div>
    <button style={{border:"2px solid red",color:"red",borderRadius:"21px",marginBottom:"2rem",marginTop:"1rem",padding:"8px 25px"}}>Select</button>
    </div>
    </div>
    <div style={{border:"2px solid grey",width:"16rem",marginLeft:"7rem",borderRadius:"15px",marginTop:"5rem"}}>
    <div style={{marginLeft:"4rem",marginTop:"5rem"}}>
      <img src={logo} alt="bhjb"/>
      <div style={{fontSize:"14px",marginTop:"2rem"}}>
      <div style={{fontWeight:"bold",marginTop:"1rem",fontSize:"20px",marginLeft:"1rem"}}>Free Plan</div>
      <div style={{marginTop:"1.5rem"}}>Unlimited Bandwitch</div>
      <div style={{marginTop:"1rem"}}>Encrypted Connection</div>
      <div style={{marginTop:"1rem"}}>No traffic Logs</div>
      <div style={{marginTop:"1rem"}}>Works on all devices</div>
      <div style={{marginTop:"1rem"}}>Connect Anywhere</div>
      </div>
    </div>
    <div style={{marginLeft:"4.5rem",marginTop:"7rem"}}>
    <div style={{fontSize:"20px"}}><span style={{fontWeight:"bold"}}>$9 </span> / month</div>
    <button style={{border:"2px solid red",color:"red",borderRadius:"21px",marginBottom:"2rem",marginTop:"1rem",padding:"8px 34px"}}>Select</button>
    </div>
    </div>
    <div style={{border:"2px solid grey",width:"16rem",marginLeft:"7rem",borderRadius:"15px",marginTop:"5rem"}}>
    <div style={{marginLeft:"4rem",marginTop:"5rem"}}>
      <img src={logo} alt="bhjb"/>
      <div style={{fontSize:"14px",marginTop:"2rem"}}>
      <div style={{fontWeight:"bold",marginTop:"1rem",fontSize:"20px",marginLeft:"1rem"}}>Free Plan</div>
      <div style={{marginTop:"1.5rem"}}>Unlimited Bandwitch</div>
      <div style={{marginTop:"1rem"}}>Encrypted Connection</div>
      <div style={{marginTop:"1rem"}}>No traffic Logs</div>
      <div style={{marginTop:"1rem"}}>Works on all devices</div>
      <div style={{marginTop:"1rem"}}>Connect Anywhere</div>
      <div style={{marginTop:"1rem"}}>Get New Features</div>

      </div>
    </div>
    <div style={{marginLeft:"4.5rem",marginTop:"5rem"}}>
    <div style={{fontSize:"20px"}}><span style={{fontWeight:"bold"}}>$12 </span> / month</div>
    <button style={{border:"2px solid red",color:"white",borderRadius:"21px",marginBottom:"2rem",marginTop:"1rem",padding:"8px 34px",backgroundColor:"red"}}>Select</button>
    </div>
    </div>
    </div>
  )
}

export default Pic;