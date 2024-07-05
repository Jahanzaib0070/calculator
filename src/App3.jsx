import React, { useState } from "react";
const App3 = ()=>{
    //Changing color using useState Hook
    const color = "#54495E";
    const [bgColor , setbgColor] = useState(color)

    const bgChange = ()=>{
        setbgColor("#5B84B1FF");
        
    }

    //Changing Font using useState Hook
    const myFont = "Bungee Inline";
    const [currFont , setFont] = useState(myFont);
    const fontChange = () => {
        setFont("Bungee Inline");
    }
   
    return(
        <>
            <div style={{backgroundColor: bgColor, fontFamily: myFont}}>
                <button onClick ={() =>{
                    bgChange()
                    fontChange()
                }}>Click me</button>
            </div>
        </>
    );
}

export default App3;