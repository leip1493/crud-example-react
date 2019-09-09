import React from 'react';
import { Link } from 'react-router-dom';

function TableRow(props){

    const deleteUser = () =>{
        const users = getUserStorage();
        let newUserList = users.find(user => user.id !== +props.obj.id);
        if(!newUserList){
            newUserList = [];
        }
        console.log(users);
        console.log(newUserList);
        localStorage.setItem("users", JSON.stringify(newUserList));
    }

    return(
        <tr>
            <td>
                {props.obj.personName}
            </td>
            <td>
                {props.obj.businessName}
            </td>
            <td>
                {props.obj.businessGstNumber}
            </td>
            <td>
                <Link to={`/edit/${props.obj.id}`} className="btn btn-primary">Edit</Link>
            </td>
            <td>
                <button className="btn btn-danger" onClick={deleteUser}>Delete</button>
            </td>
        </tr>
    );
}

function getUserStorage() {
    const usersStored = localStorage.getItem("users");
    let users = [];
    if (usersStored) {
        users = JSON.parse(usersStored);
    }
    return users;
}

export default TableRow;