import React, { useState } from 'react';

function Create(props){
    const [personName, setPersonName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessGstNumber, setBusinessGstNumber] = useState("");

    function onChangePersonName(e){
        setPersonName(e.target.value);
    }
    function onChangeBusinessName(e){
        setBusinessName(e.target.value);
    }
    function onChangeGstNumber(e){
        setBusinessGstNumber(e.target.value);
    }
    function onsubmit(e){
        e.preventDefault(); 
        const newUser = {
            personName,
            businessName,
            businessGstNumber
        };      
        saveUser(newUser);     
        clearInputs();
        console.log(localStorage.getItem("users"));   
    }

    function getUserStorage(){
        const usersStored = localStorage.getItem("users");
        let users = [];
        if (usersStored){
            users = JSON.parse(usersStored);
        }
        return users;
    }

    function saveUser(newUser){
        const users = getUserStorage();
        newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));  
        document.location.href = '/index';    
    }

    function clearInputs(){
        setPersonName("");
        setBusinessName("");
        setBusinessGstNumber("");
    }

    return(
        <div style={{marginTop: 10}}>
            <h3>Add New Business</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label>Add Person Name:</label>
                    <input type="text" className="form-control"
                        value={personName}
                        onChange={onChangePersonName}/>
                </div>
                <div className="form-group">
                    <label>Add Business Name:</label>
                    <input type="text" className="form-control"
                        value={businessName}
                        onChange={onChangeBusinessName}/>
                </div>
                <div className="form-group">
                    <label>Add GST Number:</label>
                    <input type="text" className="form-control"
                        value={businessGstNumber}
                        onChange={onChangeGstNumber}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}

export default Create;