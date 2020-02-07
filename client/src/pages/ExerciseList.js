import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

const title={
  color: "white",
  textAlign: "center",
  padding: "60px 40px 30px 40px",
}

class ExerciseList extends Component {
  state = {
    exercises: [],
    title: ""
  };

  componentDidMount() {
    this.loadExercises();
  }

  loadExercises = () => {
    API.getExercises()
      .then(res => this.setState({ exercises: res.data, title: "" }))
      .catch(err => console.log(err));
      // console.log(this.state.exercises)
  };

   // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }; 

  deleteExercise = id => {
    API.deleteExercise(id)
      .then(res => this.loadExercises())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveExercise({
        title: this.state.title
      })
        .then(res => this.loadExercises())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="parentElement">
      <Nav />
      <Container fluid>
        <Row>
          <Col size="md-6">
              <h1 style={title}>Add an Exercise</h1>
            <form style={{marginLeft: "10.5%"}}>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title" 
                placeholder="Title (required)"
              />
              <FormBtn
              onClick={this.handleFormSubmit}
              >Submit</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
              <h1 style={title}>Saved Exercises</h1>
            {this.state.exercises.length ? (
              <List>
                {this.state.exercises.map(exercise => (
                  <ListItem key={exercise._id}>
                    <span>
                      <strong>
                        {exercise.title}
                      </strong>
                    </span>
                    <DeleteBtn 
                    onClick={() => this.deleteExercise(exercise._id)}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default ExerciseList;
