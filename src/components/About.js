import React, { useState } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function About() {
  const [mystyle,setMystyle]= useState(
    {
      color:'white',
      backgroundColor:'black'
    }
  )
  const [btnText,setBtnText]=useState("Enable Light Mode")
  
  const toggleStyle=()=>{
    if(mystyle.color==='white'){
      setMystyle({
        color:'black',
      backgroundColor:'white'
      })
      setBtnText("Enable Dark Mode")
    }
    else{
      setMystyle({
        color:'white',
      backgroundColor:'black',
      border:'1px solid white'
      })
      setBtnText("Enable Light Mode")
    }
  }
 
  return (
    <div className="container" style={mystyle}>
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum qui exercitationem earum maxime esse reiciendis voluptates consequuntur eligendi? Eos ea quia architecto repellat possimus consequuntur. Facere, ipsum sunt nisi sint neque incidunt. Unde, repellat? A, adipisci commodi possimus amet non ea odio atque est animi vero? Minima repudiandae laboriosam magnam?</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, porro. Minus soluta aspernatur perferendis molestiae praesentium. Sed modi laboriosam quibusdam accusamus, corrupti dignissimos ipsam autem blanditiis. Provident labore incidunt odio dolore, officia deleniti! Reiciendis dolor debitis officiis odit explicabo corporis recusandae, eligendi itaque. Nesciunt quas dicta ullam cum! Neque, placeat?</div>
    </div>
  </div>
  <div className="accordion-item"style={mystyle} >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non quam quo dolor aliquam minima hic recusandae quaerat, harum perferendis cupiditate quis natus saepe, assumenda, itaque aliquid asperiores impedit adipisci in voluptatem doloribus accusamus molestias quasi laboriosam. Nam eum enim ab quae illum maxime quas. Blanditiis nulla aliquam sit ipsum nesciunt?Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
    <div className="conatiner my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary"> {btnText}</button>
    </div>
  </div>
</div>
</div>
  );
}
