import React, { useState,useEffect } from "react";
import MyService from "../MyService";

const Admin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        retrieveTutorials();
    }, []);

    const retrieveTutorials = () => {
        MyService.getAll()
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div className="list row">

            <div className="col-md-6">
                <h4>Users List</h4>

                <ul className="list-group">
                    {users &&
                    users.map((tutorial, index) => (
                        <li
                            className={
                                "list-group-item " + (index === index ? "active" : "")
                            }
                            onClick={() => setUsers(tutorial, index)}
                            key={index}
                        >
                            {tutorial.fio} <br/>
                            {tutorial.address}<br/>
                            {tutorial.phone}
                        </li>
                    ))}
                </ul>


            </div>

        </div>
    );
};

export default Admin;
