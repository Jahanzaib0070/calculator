import React, { useState } from "react";

const App = () => {
  
  const [name, setName] = useState("");

  const newText = (event)=>{
    setName(event.target.value)
  }  
  
  const [fullName, setFullname] = useState("");

  const saveText = ()=>{
    setFullname(name)
  }


  
  return(
    <>
      <div>
        <h1 id="text1">Hello {fullName}</h1>
        <input className="inputText" type="text" placeholder="Enter Your Name" onChange={newText} value={name}/>
        <button onClick={saveText}>Save</button>
      </div>
    </>
  );
}

export default App;