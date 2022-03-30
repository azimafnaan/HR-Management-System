import React, { useEffect, useState } from 'react';
import './Employee.css';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Employee = () => {
    let { employeeId } = useParams();
    const [employee, setEmployee] = useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    useEffect(() => {
        fetch("/fakedb.json")
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, []);
    const myEmployee = employee ? employee.find(td => td.id == employeeId) : []
    return (
        <div className="employee">
            <form className="employeeEditForm" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={myEmployee?.id} {...register("id")} placeholder="Employee ID" />
                <input defaultValue={myEmployee?.firstName} {...register("firstName")} placeholder="First Name" />
                <input defaultValue={myEmployee?.lastName} {...register("lastName")} placeholder="Last Name" />
                <input defaultValue={myEmployee?.email} {...register("email")} placeholder="Email" type="email" />
                <input defaultValue={myEmployee?.contactNumber} {...register("contactNumber")} placeholder="Contact Number" />
                <input defaultValue={myEmployee?.deportment} {...register("deportment")} placeholder="Deportment" />
                <input defaultValue={myEmployee?.position} {...register("position")} placeholder="Position" />
                <input defaultValue={myEmployee?.joiningDate} {...register("joiningDate")} placeholder="Joining Date" />
                <input defaultValue={myEmployee?.salary} {...register("salary")} placeholder="Salary" />
                <input defaultValue={myEmployee?.accountNumber} {...register("accountNumber")} placeholder="Account Number" />
                <input defaultValue={myEmployee?.dateOfBirth} {...register("dateOfBirth")} placeholder="Date Of Birth" />
                <input defaultValue={myEmployee?.age} {...register("age")} placeholder="Age" />
                <input defaultValue={myEmployee?.gender} {...register("gender")} placeholder="Gender" />

                <input type="submit" className="submit-btn" />
            </form>
        </div>
    );
};

export default Employee;