import React, { useState } from "react";


const App = () => {

  
  let handleClick = (e)=>{
    for(let i=0;i<4;i++){
      let div = document.createElement('div')
      div.className="boxes"
      
    e.appendChild(div)
    }
    // console.log(e)
    
  }


  return <>
    <div className="container">
      <div className="">
        <h1 className="htag">Click to spilt the box</h1>
      </div>
      
      <div className="box" onClick={(e)=>handleClick(e.target)}>
            
      </div>
    </div>
  
  
  
  </>


};

export default App;
