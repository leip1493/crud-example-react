import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

function Index(props){
    const [business, setBusiness] = useState([]);

    useEffect( () => {
        getBusinessStorage()
            .then( response => {
                setBusiness(response);
            });
    });

    const tabRow = () => {
        return business.map( (object, index) => {
            return <TableRow obj={object} key={index} />;
        });
    }

    return(
        <div>
            <h3 align="center">Business List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Person</th>
                        <th>Business</th>
                        <th>GST Number</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tabRow()}                    
                </tbody>
            </table>
        </div>
    );
}

async function getBusinessStorage() {
    const usersStored = localStorage.getItem("users");
    let users = [];
    if (usersStored) {
        users = JSON.parse(usersStored);
    }
    console.log(users)
    return users;
}

export default Index;