import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 100, 
        margin: "30px auto",
        clear: "both", 
        paddingTop: "9%",  
        textAlign: "center",
        color: "white",
        backgroundColor: "#0cbaba",
      }}
      className="ui card"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
