import React from 'react'
import pic1 from "../../assets/Assets/Ellipse 175 (1).png";
import pic2 from "../../assets/Assets/Ellipse 175 (2).png";
import pic3 from "../../assets/Assets/Ellipse 175.png";
const Body5 = () => {
  return (
    <>
    <div style={{marginLeft:"27rem"}}>
    <div style={{fontSize:"31px",fontWeight:"bold",marginLeft:"4rem"}}>
    <div>Trusted by Thousands of </div>
    <div style={{marginLeft:"4rem",marginBottom:"2rem"}}>Happy Customer</div>
    </div>
    <div>These are the stories of our customers who have joined us with great</div>
    <div style={{marginLeft:"7rem",marginTop:".5rem"}}>pleasure when using this crazy feature.</div>
    </div>
    <div style={{display:"flex",marginTop:"3rem"}}>
        <div style={{border:"2px solid red",marginLeft:"3rem",width:"24rem",borderRadius:"11px",height:"14rem"}} >    
            <div style={{display:"flex" ,marginTop:"1rem"}}><img style={{width:"40px", height:"40px",marginLeft:"2rem"}} src={pic3} alt=""/> <div style={{marginLeft:"1.5rem",marginTop:"1rem"}}>Viezh Robert</div> <div style={{marginLeft:"6.5rem",marginTop:"1rem"}}>4.5 <span style={{color:"yellow"}}>*</span></div></div>
            <div style={{fontSize:"12px",color:"grey",marginLeft:"6rem",marginBottom:"1rem"}}>Warsaw,Poland</div>
            <p style={{width:"20rem",height:"8rem",marginLeft:"2rem",marginTop:"1rem"}}>Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems LasiesVPN always the best</p>
            </div>

            <div style={{border:"2px solid grey",marginLeft:"3rem",width:"24rem",borderRadius:"11px",height:"14rem"}} >    
            <div style={{display:"flex" ,marginTop:"1rem"}}><img style={{width:"40px", height:"40px",marginLeft:"2rem"}} src={pic1} alt=""/> <div style={{marginLeft:"1.5rem",marginTop:"1rem"}}>Viezh Robert</div> <div style={{marginLeft:"6.5rem",marginTop:"1rem"}}>4.5 <span style={{color:"yellow"}}>*</span></div></div>
            <div style={{fontSize:"12px",color:"grey",marginLeft:"6rem",marginBottom:"1rem"}}>Warsaw,Poland</div>
            <p style={{width:"20rem",height:"8rem",marginLeft:"2rem",marginTop:"1rem"}}>"I like it because I like to travel far and still can connect with high speed."</p>
            </div>

            <div style={{border:"2px solid grey",marginLeft:"3rem",width:"24rem",borderRadius:"11px",height:"14rem"}} >    
            <div style={{display:"flex" ,marginTop:"1rem"}}><img style={{width:"40px", height:"40px",marginLeft:"2rem"}} src={pic3} alt=""/> <div style={{marginLeft:"1.5rem",marginTop:"1rem"}}>Viezh Robert</div> <div style={{marginLeft:"6.5rem",marginTop:"1rem"}}>4.5 <span style={{color:"yellow"}}>*</span></div></div>
            <div style={{fontSize:"12px",color:"grey",marginLeft:"6rem",marginBottom:"1rem"}}>Warsaw,Poland</div>
            <p style={{width:"20rem",height:"8rem",marginLeft:"2rem",marginTop:"1rem"}}>"This is very unusual for my business that cyrrently requires a virtual private network that has high security."</p>
            </div>

    </div>
    </>
  )
}

export default Body5;
