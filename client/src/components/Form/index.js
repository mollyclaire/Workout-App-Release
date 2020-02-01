import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <span className="ui input">
      <input style={{ float: "left", marginBottom: 10, marginRight: 10 }} className="form-control" {...props} />
    </span>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 50 }} className="ui button">
      {props.children}
    </button>
  );
}
