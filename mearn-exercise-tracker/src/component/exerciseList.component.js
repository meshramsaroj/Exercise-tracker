import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.onDeleteExercise = this.onDeleteExercise.bind(this);

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

  onDeleteExercise(id) {
    axios
      .delete("http://localhost:4000/exercises/" + id)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(e => e._id !== id)
    });
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
              <th scope="col">Details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map(exercise => {
              return (
                <tr key={exercise._id}>
                  <td>{exercise._id}</td>
                  <td>{exercise.username}</td>
                  <td className="info">
                    <Link to={"/details/" + exercise._id}>Info</Link>
                  </td>
                  <td className="action">
                    <DeleteIcon
                      className=""
                      onClick={() => this.onDeleteExercise(exercise._id)}
                    />
                    <span className="mx-4">|</span>
                    <Link to={"/update/" + exercise._id}>
                      <EditIcon className="" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
