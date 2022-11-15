import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Analytics from "./pages/analytics/Analytics";
import Billing from "./pages/billing/Billing";
import Reports from "./pages/reports/Reports";
import Settings from "./pages/settings/Settings";
import Camera from "./pages/camera/Camera";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import SignIn from "./pages/login/SignIn";
import "./app.css";
import { useLocation} from "react-router-dom";
import Protected from "./pages/Protected";
import Insights from "./pages/insights/Insights";
import SignUp from "./pages/login/SignUp";

function App() {
  let currentRoute = useLocation().pathname.toLowerCase();


  function check(){
    if (currentRoute.includes("/login") || currentRoute.includes("/signup")){
      console.log("login page")
      return false
    }
    return true
  }
  
  return (
    <>
    { check() ?
      <div className="sidebar-flex">
        <Sidebar/>
        <div className="topBar" >
          <Topbar/> 
          <Routes>
            {/* <Route path="/home" element={<Protected Component={Home}/>}/> */}
            <Route path="/analytics" element={<Protected Component={Analytics}/>}/>
            <Route path="/camera" element={<Protected Component={Camera}/>}/>
            <Route path="/camera/:id" element={<Protected Component={Insights}/>}/>
            {/* <Route path="/features" element={<Protected Component={Features}/>}/> */}
            <Route path="/reports" element={<Protected Component={Reports}/>}/>
            <Route path="/billing" element={<Protected Component={Billing}/>}/>
            <Route path="/settings" element={<Protected Component={Settings}/>}/>
            
            <Route path="*" element={<Protected Component={Camera}/>}/>
          </Routes>
        </div>
      </div>: 
        <Routes>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    }
    

    </>
  );
}

export default App;
