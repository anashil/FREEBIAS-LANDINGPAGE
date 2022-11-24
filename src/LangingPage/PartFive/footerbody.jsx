import React from 'react'

const Footerbody = () => {
  return (
    <div style={{marginTop:"3rem",marginLeft:"3rem",display:"flex",boxShadow:"10px 10px 60px grey"}}>
        <div style={{marginLeft:"6rem",marginTop:"3rem",marginBottom:"3rem"}}>
      <div style={{fontSize:"30px",fontWeight:"bold"}}>Subscribe Now for</div>
      <div style={{fontSize:"30px",fontWeight:"bold"}}>Get Special Features!</div>
      <div style={{fontSize:"12px"}}>Let's subscribe with us and find the fun.</div>
      </div>
      <button style={{width:"10rem",height:"2.5rem",borderRadius:"4px",backgroundColor:"red",color:"white",border:"1px solid red",fontWeight:"bold",marginLeft:"40rem",marginTop:"5rem"}}>Subscribe Now</button>
    </div>
  )
}

export default Footerbody;
