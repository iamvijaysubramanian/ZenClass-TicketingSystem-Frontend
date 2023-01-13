import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Outlet } from 'react-router-dom';

function PortalLayout() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <Topbar />
        <Outlet/>
        <div id="content"></div>
      </div>
    </div>
  )
}

export default PortalLayout;