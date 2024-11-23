


import React, { useState } from "react";
import './App.css';

const Clock = () => {
    const curTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState(curTime);

    const update = () =>{
      const curTime = new Date().toLocaleTimeString();
      setTime(curTime)
    }
    setInterval(()=>{
      update()


    },1000
  )
    return (
        <>
        <div className="container">
          <h1 className="text"><u>SAKHI</u></h1>
          <h1 className="text">(<b>Digital Clock</b>)</h1>
            <h1>{time}</h1>
        </div>
        </>
    )

}
export default Clock