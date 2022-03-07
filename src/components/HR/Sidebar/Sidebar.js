import React from 'react';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import CurrencyPoundOutlinedIcon from '@mui/icons-material/CurrencyPoundOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">
                        <AppsOutlinedIcon className="title-icon"></AppsOutlinedIcon>
                        HR Dashboard
                    </h3>
                    <ul className="sidebar-list">
                        <Link to="/allEmployee">
                            <li className="sidebar-list-item">
                                <GroupsOutlinedIcon className="sidebar-icon"></GroupsOutlinedIcon>
                                Employees
                            </li>
                        </Link>
                        <Link to="attendance">
                            <li className="sidebar-list-item">

                                <HowToRegOutlinedIcon className="sidebar-icon"></HowToRegOutlinedIcon>
                                Attendance

                            </li>
                        </Link>
                        <Link to="salary">
                            <li className="sidebar-list-item">
                                <CurrencyPoundOutlinedIcon className="sidebar-icon"></CurrencyPoundOutlinedIcon>
                                Salary

                            </li>
                        </Link>
                        <Link to="leaveApplication">
                            <li className="sidebar-list-item">

                                <AddBoxOutlinedIcon className="sidebar-icon"></AddBoxOutlinedIcon>
                                Leave Application

                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;