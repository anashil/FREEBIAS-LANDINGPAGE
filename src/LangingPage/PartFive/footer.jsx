import React from 'react'

const Footer5 = () => {
  return (
    <>
    <div style={{display:"flex"}} >
    <div style={{display:"flex"}}>
    <div style={{marginLeft:"4rem",marginTop:"5rem",backgroundColor:"red",borderRadius:"4px",width:"30px",height:"10px"}}></div>

      <div style={{marginLeft:"1rem",marginTop:"5rem",backgroundColor:"grey",borderRadius:"50%",width:"10px",height:"10px"}}></div>
      <div style={{marginLeft:"1rem",marginTop:"5rem",backgroundColor:"grey",borderRadius:"50%",width:"10px",height:"10px"}}></div>
      <div style={{marginLeft:"1rem",marginTop:"5rem",backgroundColor:"grey",borderRadius:"50%",width:"10px",height:"10px"}}></div>
   </div>
   <div style={{display:"flex",marginLeft:"60rem",marginTop:"4rem"}}>
   <div style={{marginRight:"1rem",fontWeight:"bold",width:"25px",height:"25px",borderRadius:"50%",border:"2px solid red",color:"red"}}>{"<-"}</div>
   <div style={{fontWeight:"bold",width:"25px",height:"25px",borderRadius:"50%",border:"2px solid red",color:"white",backgroundColor:"red"}}>{"->"}</div>
   </div>
   </div>
   </>
  )
}

export default Footer5;
