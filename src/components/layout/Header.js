import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  textAlign: "center",
  padding: "10px"
};
