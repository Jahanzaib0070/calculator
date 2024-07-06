import React, { useState } from "react";

const App1 = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: ""
    });

    const newText = (event)=>{

        const value = event.target.value;
        const name = event.target.name;

        setFullName((prevValue)=>{
            if(name === "fName"){
                return{
                    fname: value,
                    lname: prevValue.lname
                }
            }else if(name === "lName"){
                return{
                    fname: prevValue.fname,
                    lname: value
                }
            }
        })
    }

    const saveText = (event)=>{
        event.preventDefault();
    }


    return(
        <>
        <div className="main">
        <form onSubmit ={saveText}>
            <div className="form1">
                <h1 id="text1">{`Hello! ${fullName.fname} ${fullName.lname}`}</h1>
                <input className="inputText" type="text" placeholder="Enter Your First Name" name="fName" onChange={newText} value={fullName.fname}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Last Name" name="lName" onChange={newText} value={fullName.lname}/>
                <button type="submit" >Submit</button>
            </div>
            </form>
        </div>
        </>
    );
}

export default App1;