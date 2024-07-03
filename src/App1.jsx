import React, { useState } from "react";


const App1 = ()=> {
    let showTime = new Date().toLocaleTimeString();
    const[time, updTime] = useState(showTime);


    const updatedTime = ()=>{
        let showTime = new Date().toLocaleTimeString();
        updTime(showTime);
    }
    
 
    return (
        <div className="App">
            <h1 align="center"> {time}</h1>
            <button onClick={updatedTime} style={{fontWeight:"bold"}}>Get Updated Time</button>
        </div>
    );
}

export default App1;
