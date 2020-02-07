// This page can only currently be accessed by changing the URL

import React from "react";

const style = {
    textAlign: "center",
    minHeight: "85vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(15px + 2vmin)",
    color: "white",
    width: "100%"
}

function Done() {
    return (
        <div className="app" style={style}>
            <h1>You did it. <br/> I knew you could do it.</h1>
        </div>
    )
}

export default Done;