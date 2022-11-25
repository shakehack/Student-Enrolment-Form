import React, { useState } from "react";

const MultipleInputs = () => {

    const [userRegistration, setuserRegistration] = useState({
        
        username: "",
        email: "",
        id: "",
        phone:"",
        password: "",
    });

    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setuserRegistration({ ...userRegistration, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setuserRegistration({ username: "", email: "", phone: "", password: "" });

    }
    return (
        <>
            <form   action="" onSubmit={handleSubmit}>

             <div id="container">
                <div>
                    <div className="heading"><h1><span>Student Enrolment</span></h1></div>
                    <label htmlFor="Full-Name">Full Name</label><br></br>
                    <input type="text"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name="username" id="username"></input>
                </div>
                <div>
                    <label htmlFor="email">email</label><br></br>
                    <input type="email"
                        value={userRegistration.email}
                        onChange={handleInput}
                        name="email" id="email"></input>
                </div>
                <div>
                    <label htmlFor="phone">phone</label><br></br>
                    <input type="text"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        name="phone" id="phone"></input>
                </div>

                

                <div>
                    <label htmlFor="password">password</label><br></br>
                    <input type="password"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name="password" id="password"></input>
                </div>
                <button type="submit">Register</button>
            </div>
            </form>

            <div className="enrolment">
                {
                    records.map((curElem) => {
                        return (
                            <div className="showDataStyle">
                                
                                <p>{curElem.username} {curElem.email} {curElem.phone} {curElem.password}</p>
                            </div>


                        )
                    })
                }
            </div>
        </>
    )
}
export default MultipleInputs