import axios from "axios";

export default {
  // Gets all exercises 
  getExercises: function() {
    return axios.get("/api/exercise");
  },
  // Gets the exercise with the given id
  getExercise: function(id) {
    return axios.get("/api/exercise/" + id);
  },
  // Deletes the exercise with the given id
  deleteExercise: function(id) {
    return axios.delete("/api/exercise/" + id);
  },
  // Saves an exercise to the database
  saveExercise: function(exerciseData) {
    return axios.post("/api/exercise", exerciseData);
  }
};
