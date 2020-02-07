import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <div className="ui relaxed divided list">{children}</div>
    </div>
  );
}

export function ListItem({ children }) {
  return <div className="ui-list">{children}</div>;
}