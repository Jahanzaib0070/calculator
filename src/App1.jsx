import React, { useState } from "react";

const App1 = () => {

    const [details, setDetails] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        phoneNum: ""
    });

    const newText = (event)=>{

        const value = event.target.value;
        const name = event.target.name;

        setDetails((prevValue)=>{

            return{
                ...prevValue,
                [name]: value
            }
            // if(name === "fName"){
            //     return{
            //         fname: value,
            //         lname: prevValue.lname,
            //         email: prevValue.email,
            //         phoneNum: prevValue.phoneNum
            //     }
            // }else if(name === "lName"){
            //     return{
            //         fname: prevValue.fname,
            //         lname: value,
            //         email: prevValue.email,
            //         phoneNum: prevValue.phoneNum
            //     }
            // }else if(name === "Email"){
            //     return{
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: value,
            //         phoneNum: prevValue.phoneNum
            //     }
            // }else if(name === "phoneNumber"){
            //     return{
            //         fname: prevValue.fname,
            //         lname: prevValue.lname,
            //         email: prevValue.email,
            //         phoneNum: value
            //     }
            // }
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
                <h1>{`Hello! ${details.fname} ${details.lname} ${details.gender}`}</h1>
                <h4>{` ${details.email} ${details.phoneNum}`}</h4>
                <input className="inputText" type="text" placeholder="Enter Your First Name" name="fname" onChange={newText} value={details.fname}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Last Name" name="lname" onChange={newText} value={details.lname}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your gender" name="gender" onChange={newText} value={details.gender}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Email" name="email" onChange={newText} value={details.email}/>
                <br />
                <input className="inputText" type="text" placeholder="Enter Your Phone Number" name="phoneNum" onChange={newText} value={details.phoneNum}/>
                <button type="submit" >Submit</button>
            </div>
            </form>
        </div>
        </>
    );
}

export default App1;