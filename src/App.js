import React, { useState } from "react";

const App = () => {
  //setting value for First Name
  const [name, setName] = useState("");
  const newText = (event)=>{
    setName(event.target.value);
  }
  const [firstName, setFirstname] = useState("");
  
  //setting value for Last Name
  const [lName, setLname] = useState("")
  const newTexttwo = (event)=>{
    setLname(event.target.value);
  }
  const [lastName, setLastname] = useState("");

  //passing values to both first and last name
  const saveText = (event)=>{
    event.preventDefault();
    setFirstname(name);
    setLastname(lName);
  }
  return(
    <>
    <div className="main">
      <form onSubmit ={saveText}>
          <div className="form1">
            <h1 id="text1">{`Hello! ${firstName} ${lastName}`}</h1>
            <input className="inputText" type="text" placeholder="Enter Your First Name" onChange={newText} value={name}/>
            <br />
            <input className="inputText" type="text" placeholder="Enter Your Last Name" onChange={newTexttwo} value={lName}/>
            <button type="submit" >Submit</button>
          </div>
        </form>
    </div>
      
    </>
  );
}

export default App;