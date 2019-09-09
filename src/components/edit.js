import React, { useState, useEffect } from 'react';


function Edit(props){
    const [personName, setPersonName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessGstNumber, setBusinessGstNumber] = useState("");

    useEffect(() => {
        findUserStorage(+props.match.params.id)
            .then(response => {
                setPersonName(response.personName);
                setBusinessName(response.businessName);
                setBusinessGstNumber(response.businessGstNumber);
            });
    }, []);

    function onChangePersonName(e) {
        setPersonName(e.target.value);
    }
    function onChangeBusinessName(e) {
        setBusinessName(e.target.value);
    }
    function onChangeGstNumber(e) {
        setBusinessGstNumber(e.target.value);
    }
    function onsubmit(e) {
        e.preventDefault();
        const user = {
            personName,
            businessName,
            businessGstNumber
        };
        updateUser(+props.match.params.id, user);
        document.location = '/index'; 
    }

    function getUserStorage() {
        const usersStored = localStorage.getItem("users");
        let users = [];
        if (usersStored) {
            users = JSON.parse(usersStored);
        }
        return users;
    }

    function updateUser(id, updateUser) {
        const users = getUserStorage();
        const user = users.find(user => user.id === id);
        const indexUser = users.findIndex(user => user.id === id);
        const update = { ...user, ...updateUser};
        users[indexUser] = update;
        localStorage.setItem("users", JSON.stringify(users));
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add New Business</h3>
            <form onSubmit={onsubmit}>
                <div className="form-group">
                    <label>Add Person Name:</label>
                    <input type="text" className="form-control"
                        value={personName}
                        onChange={onChangePersonName} />
                </div>
                <div className="form-group">
                    <label>Add Business Name:</label>
                    <input type="text" className="form-control"
                        value={businessName}
                        onChange={onChangeBusinessName} />
                </div>
                <div className="form-group">
                    <label>Add GST Number:</label>
                    <input type="text" className="form-control"
                        value={businessGstNumber}
                        onChange={onChangeGstNumber} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register Business" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

async function findUserStorage(id) {
    const usersStored = localStorage.getItem("users");
    const users = JSON.parse(usersStored);
    const user = users.find( user => user.id === id);
    return user;
}

export default Edit;