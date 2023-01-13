import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Topbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("myreact");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {`${Login.username}`}
            </span>
            <button
              type="button"
              className="btn btn-danger btn-md"
              onClick={logout}
            >
              <i
                className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-200" >
                Logout
              </i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Topbar;
