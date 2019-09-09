import React, { useState, useEffect } from 'react';
import TableRow from './TableRow';

function Index(props){
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        // const texto = "ALGO"
        // document.title = texto;
        // console.log(texto)
    })

    useEffect( () => {
        const fetchData = async () =>{
            const resp = await getBusinessStorage();
            console.log(resp)
            setBusiness(resp);
        }
        fetchData();
    }, []);

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
    if (usersStored !== 'undefined') {
        users = JSON.parse(usersStored);
    }
    return users;
}

export default Index;