import React, { useEffect, useState } from 'react';
import './Employee.css';
import { useParams } from 'react-router-dom';
const Employee = () => {
    let { employeeId } = useParams();
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        fetch("/fakedb.json")
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, []);
    const myEmployee = employee ? employee.find(td => td.id == employeeId) : []
    return (
        <div className="employee">
            <h1>{myEmployee?.id}</h1>
            <h1>{myEmployee?.firstName}</h1>
        </div>
    );
};

export default Employee;