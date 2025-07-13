 import React from "react";
 import { useState } from "react";

import './Time.css'
 function Time() {
    const [Count, setCount] = useState(0)
  return (
    <>
      <div className="bg">
      <div className="main">
          <div className="but">
            <h1 > COUNTER</h1>
         <div className="bt1"> &#128336;<button onClick={() => setCount(Count+1)}>Increase</button></div>
         <div className="bt2">&#128336;<button onClick={()=>setCount(Count-1)}>Decrease</button></div>
         <div className="bt3"> &#128336;<button onClick={() => setCount(0)}>Reset</button></div>
        <h1 className="hea">{Count}</h1>
        </div></div></div>
      </>
  )
 }

 export default Time


 
