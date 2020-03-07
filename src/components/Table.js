import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function Table() {
    const [data, setData] = useState(null);

    useEffect(() => {
        Axios.get('https://randomuser.me/api/?results=250')
            .then(res => setData(res.data))
    }, []);

    console.log(data);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {data && data.res.map(emp => (
                    <tr key={emp.id.value}>
                    <th scope="row">{emp.picture.thumbnail}</th>
                    <td>{emp.name.first} {emp.name.last}</td>
                    <td>{emp.dob.age}</td>
                    <td>{emp.location.city}</td>
                    <td>{emp.email}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}