import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = ({ title = "سامانه جامع تکواندو" }) => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to=".../public/images/2.png" className="logo-link">
            {/* اگر تصویری ندارید، می‌توانید متن جایگزین بگذارید */}
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#d92a2a",
                marginLeft: "10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            ></div>
            <span className="system-title">{title}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
