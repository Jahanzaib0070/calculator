import React, { useState } from "react";
const App3 = ()=>{
    //Changing color using useState Hook
    const color = "#54495E";
    const [bgColor , setbgColor] = useState(color)

    const bgChange = ()=>{
        setbgColor("#5B84B1FF");
        
    }

    //Changing Font using useState Hook
    const myFont = "'Ga Maamli', sans-serif";
    const [currFont , setFont] = useState(myFont);
    const fontChange = () => {
        setFont("Bungee Inline");
    }
   
    return(
        <>
            <div style={{backgroundColor: bgColor, fontFamily: currFont}}>
                <button onClick ={() =>{
                    bgChange()
                    fontChange()
                }}>Click me</button>
            </div>
        </>
    );
}

export default App3;