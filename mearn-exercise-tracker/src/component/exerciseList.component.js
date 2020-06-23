import React, { Component } from "react";
import axios from "axios";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercises: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/exercises/list")
      .then(res => {
        if (res.data.length > 0) {
          this.setState({
            exercises: res.data.map(exercise => exercise)
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="mb-5">Exercise List</h1>
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map(exercise => {
              return (
                <tr key={exercise._id}>
                  <td >{exercise._id}</td>
                  <td >{exercise.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
