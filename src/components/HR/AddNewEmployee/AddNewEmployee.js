import React from 'react';
import './AddNewEmployee.css';
// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const AddNewEmployee = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="addNewEmployee">
            <h2 className="heading">Add New Employee</h2>


            <form className="employeeEditForm" onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("id")} placeholder="Employee ID" />
                <input  {...register("firstName")} placeholder="First Name" />
                <input  {...register("lastName")} placeholder="Last Name" />
                <input  {...register("email")} placeholder="Email" type="email" />
                <input  {...register("contactNumber")} placeholder="Contact Number" />
                <input  {...register("deportment")} placeholder="Deportment" />
                <input  {...register("position")} placeholder="Position" />
                <input  {...register("joiningDate")} placeholder="Joining Date" />
                <input  {...register("salary")} placeholder="Salary" />
                <input  {...register("accountNumber")} placeholder="Account Number" />
                <input  {...register("dateOfBirth")} placeholder="Date Of Birth" />
                <input  {...register("age")} placeholder="Age" />
                <input  {...register("gender")} placeholder="Gender" />


                <input type="submit" className="submit-btn" />

            </form>
        </div>
    );
};

export default AddNewEmployee;