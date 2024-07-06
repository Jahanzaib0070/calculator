import React, { useState } from "react";

const App1 = () => {

    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phoneNum: ""
    });

    const newText = (event)=>{

        const value = event.target.value;
        const name = event.target.name;

        setFullName((prevValue)=>{
            if(name === "fName"){
                return{
                    fname: value,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    phoneNum: prevValue.phoneNum
                }
            }else if(name === "lName"){
                return{
                    fname: prevValue.fname,
                    lname: value,
                    email: prevValue.email,
                    phoneNum: prevValue.phoneNum
                }
            }else if(name === "Email"){
                return{
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: value,
                    phoneNum: prevValue.phoneNum
                }
            }else if(name === "phoneNumber"){
                return{
                    fname: prevValue.fname,
                    lname: prevValue.lname,
                    email: prevValue.email,
                    phoneNum: value
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
                <h1>{`Hello! ${fullName.fname} ${fullName.lname}`}</h1>
                <h4>{`Contact: ${fullName.email} | ${fullName.phoneNum}`}</h4>
                <input className="inputText" type="text" placeholder="Enter Your First Name" name="fName" onChange={newText} value={fullName.fname}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Last Name" name="lName" onChange={newText} value={fullName.lname}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Email" name="Email" onChange={newText} value={fullName.email}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Phone Number" name="phoneNumber" onChange={newText} value={fullName.phoneNum}/>
                <button type="submit" >Submit</button>
            </div>
            </form>
        </div>
        </>
    );
}

export default App1;