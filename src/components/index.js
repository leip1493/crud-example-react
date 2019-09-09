import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

function Index(props){
    const [business, setBusiness] = useState([]);

    useEffect( () => {        
        async function getBusinessStorage() {
            const usersStored = localStorage.getItem("users");
            let users = [];
            if (usersStored || usersStored.length > 0) {
                users = JSON.parse(usersStored);
            }
            return users;
        }

        (async () => {            
            const resp = await getBusinessStorage();
            setBusiness(resp);
        })();

    }, []);

    const tabRow = () => {
        if(business.length > 0){
            return business.map( (object, index) => (
                <TableRow obj={object} key={index} />
            ));
        }
        return (
            <tr>
                <td colSpan="4">
                    <h4 style={{textAlign:'center'}}>No hay usuarios registrados</h4>
                </td>
            </tr>
        );
    }

    return(
        <div>
            <h3 align="center">Business List </h3>
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


export default Index;