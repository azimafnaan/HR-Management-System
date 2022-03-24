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
            <form onSubmit={handleSubmit(onSubmit)}>


                <input defaultValue={myEmployee?.id} type="number" {...register("id", { required: true, maxLength: 50 })} placeholder="Employee ID" />



                <input defaultValue={myEmployee?.firstName} {...register("firstName", { maxLength: 50 })} placeholder="First Name" />

                <input defaultValue={myEmployee?.lastName} {...register("lastName", { maxLength: 50 })} placeholder="Last Name" />


                <input defaultValue={myEmployee?.email} type="email" {...register("email", { required: true, maxLength: 50 })} placeholder="Email" />


                <input defaultValue={myEmployee?.contactNumber} {...register("contactNumber")} placeholder="Contact Number" />


                <input defaultValue={myEmployee?.deportment} {...register("deportment", { required: true, maxLength: 50 })} placeholder="Deportment" />

                <input defaultValue={myEmployee?.position} {...register("position", { required: true, maxLength: 50 })} placeholder="Position" />


                <input defaultValue={myEmployee?.joiningDate}  {...register("joiningDate", { required: true, maxLength: 50 })} placeholder="Joining Date" />


                <input defaultValue={myEmployee?.salary} {...register("salary")} placeholder="Salary" />

                <input defaultValue={myEmployee?.accountNumber} type="number" {...register("accountNumber", { required: true, maxLength: 50 })} placeholder="Account Number" />


                <input defaultValue={myEmployee?.dateOfBirth}  {...register("dateOfBirth", { required: true, maxLength: 50 })} placeholder="Date Of Birth" />


                <input defaultValue={myEmployee?.age} type="number" {...register("age", { required: true, maxLength: 50 })} placeholder="Age" />



                <input defaultValue={myEmployee?.gender}  {...register("gender", { required: true, maxLength: 50 })} placeholder="Gender" />

                <input type="submit" />

            </form>

        </div>
    );
};

export default Employee;