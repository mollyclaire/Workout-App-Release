import React, { Component } from "react";
import Nav from "../components/Nav";
import Timer from "../components/Timer";
import API from "../utils/API";
// import StopBtn from "../components/StopBtn";

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

class Exercise extends Component {
    
    state={
        exercises: [],
        seconds: null
    }

    getRandom() {
        API.getExercise()
        // .then(res => this.setState({ exercises: res.data }))
        .then(res =>this.setState(({exercises: res.data})))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <div style={style}>
                <Timer />
                </div>
            </div>
        );
    }
}

export default Exercise;