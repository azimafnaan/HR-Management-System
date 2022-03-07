import './App.css';
import Sidebar from './components/HR/Sidebar/Sidebar';
import Topbar from './components/HR/Topbar/Topbar';
import './App.css';
function App () {
  return (
    <div>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="other">

        </div>
      </div>
    </div>
  );
}

export default App;
