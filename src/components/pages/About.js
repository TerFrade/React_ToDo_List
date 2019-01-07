import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <h1 style={aboutStyle}>About</h1>
      <p style={aboutStyle}>
        This is the ToDo List app version 1.0.0 it is part of a react crash
        course.
      </p>
    </React.Fragment>
  );
}

const aboutStyle = {
  textAlign: "center",
  padding: "10px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "800px"
};
