import React, { useState } from "react";
import "./index.css";


const App2 = () =>{

    let time = new Date().toLocaleTimeString();
    const [currTime, updTime] = useState(time);

    const updatedTime = () =>{
        let time = new Date().toLocaleTimeString();
        updTime(time);
    }
    setInterval(updatedTime, 1000);

    return(
    <>
        <div className="main">
            <h1>{currTime}</h1>
            {/* <button onClick={updatedTime}>Get Time</button> */}
        </div>
    </>
    );
}

export default App2;