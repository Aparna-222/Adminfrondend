import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaClipboardList,
  FaTable,
  FaEye,
} from "react-icons/fa";
import "./AppLayout.css";
import Header from "./Header";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideSidebarPaths = ["/", "/login", "/register"];
  const showSidebar = !hideSidebarPaths.includes(location.pathname);

  return (
    <div className="container" >
      <Header />
      <div className="main-layout">
        {showSidebar && (
          <aside className="sidebar">
           
            <nav>
              <ul>
                <li>
                  <Link to="/dashboard">
                    <FaTachometerAlt /> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/master">
                    <FaTable /> Master
                  </Link>
                </li>
                <li>
                  <Link to="/checklist">
                    <FaClipboardList /> Checklist
                  </Link>
                </li>
                <li>
                  <Link to="/view">
                    <FaEye /> View
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
