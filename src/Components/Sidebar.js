import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-text mx-3">Query Support</div>
        </a>
        <hr className="sidebar-divider my-0"></hr>

        <li className="nav-item active">
        <Link to={"/portal/dashboard"} className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

        <hr className="sidebar-divider"></hr>
        <div className="sidebar-heading">Interface</div>
        <li className="nav-item">
        <Link
          to={"/portal/tickets"}
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Tickets</span>
        </Link>
      </li>
      </ul>
    </>
  );
}

export default Sidebar;
