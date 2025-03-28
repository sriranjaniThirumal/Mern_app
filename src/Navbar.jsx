import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    color: "#61dafb",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "8px 16px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease"
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#333",
    color: "white",
    padding: "15px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Todo
      </Link>
      <Link to="/profile" style={linkStyle}>
        Profile Card
      </Link>
      <Link to="/gridview" style={linkStyle}>
        Grid Application
      </Link>
    </nav>
  );
};

export default Navbar;