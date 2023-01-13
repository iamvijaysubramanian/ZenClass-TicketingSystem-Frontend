import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sb-admin-2.css";
import "./fontawesome-free/css/all.min.css";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tickets from "./Components/Tickets";
import Login from "./Components/Login";
import PortalLayout from "./Components/PortalLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
              <Route path="/portal" element={<PortalLayout/>}>
              <Route path="/portal/dashboard" element={<Dashboard/>}/>
              <Route exact path="/portal/tickets" element={<Tickets/>}/>
              
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
