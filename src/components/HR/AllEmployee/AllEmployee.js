import React, { useState } from 'react';
import './AllEmployee.css';
import { rows } from '../../dummyData'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const AllEmployee = () => {
    const [data, setData] = useState(rows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'Employee ID', width: 120 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 170 },
        { field: 'contactNumber', headerName: 'Contact Number', width: 170 },
        { field: 'deportment', headerName: 'Deportment', width: 170 },
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

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/employee/" + params.row.id}>
                            <button className="employeeListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon className="employeeListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        ></DeleteOutlineIcon>
                    </>
                )
            }
        },

    ];



    return (
        <div className="allEmployee">
            <h3>Employee Details</h3>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={9}
                disableSelectionOnClick
                rowsPerPageOptions={[5]}

            />

        </div>
    );
};

export default AllEmployee;