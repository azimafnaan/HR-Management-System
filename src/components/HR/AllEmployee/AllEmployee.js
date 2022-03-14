import React from 'react';
import './AllEmployee.css';
import { DataGrid } from '@mui/x-data-grid';


const AllEmployee = () => {
    const columns = [
        { field: 'id', headerName: 'Employee ID', width: 120 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 170 },
        { field: 'contactNumber', headerName: 'Contact Number', width: 170 },
        { field: 'deportment', headerName: 'Deportment', width: 150 },
        { field: 'position', headerName: 'Position', width: 150 },
        { field: 'joiningDate', headerName: 'Joining Date', width: 150 },
        { field: 'salary', headerName: 'Salary', width: 100 },
        { field: 'accountNumber', headerName: 'Account Number', width: 170 },
        { field: 'dateOfBirth', headerName: 'Date of Birth', width: 150 },
        {
            field: 'age',
            headerName: 'Age',
            width: 90,
        },



    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', dateOfBirth: '04-05-1995', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 11, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 12, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 13, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 15, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 16, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 17, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 22, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 23, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 24, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 25, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 26, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
        { id: 27, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div className="allEmployee">
            <h3>Employee Details</h3>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={9}

            />
        </div>
    );
};

export default AllEmployee;