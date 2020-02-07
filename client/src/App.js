import React from "react";
import ExerciseList from "./pages/ExerciseList";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Done from "./pages/Done";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Background from "../src/exercise-photo.png"

function App() {
  return (
    <Router>
    <div 
    style={{ 
      height: "100vh", 
      backgroundImage: `url(${Background})`
    }}
    >
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={ExerciseList} />
      <Route exact path="/exercise" component={Exercise} />
      <Route exact path="/done" component={Done} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
