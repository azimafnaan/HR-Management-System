import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllEmployee from './components/HR/AllEmployee/AllEmployee';
import Attendance from './components/HR/Attendance/Attendance';
import './App.css';
import Sidebar from './components/HR/Sidebar/Sidebar';
import Topbar from './components/HR/Topbar/Topbar';
import Salary from './components/HR/Salary/Salary';
import LeaveApplication from './components/HR/LeaveApplication/LeaveApplication';
function App () {
  return (
    <div>
      <Router>
        <Topbar></Topbar>
        <div className="container">
          <Sidebar></Sidebar>
          <Switch>
            <Route exact path="/">
              <AllEmployee></AllEmployee>
            </Route>
            <Route path="/allEmployee">
              <AllEmployee></AllEmployee>
            </Route>
            <Route path="/attendance">
              <Attendance></Attendance>
            </Route>
            <Route path="/salary">
              <Salary></Salary>
            </Route>
            <Route path="/leaveApplication">
              <LeaveApplication></LeaveApplication>
            </Route>
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
