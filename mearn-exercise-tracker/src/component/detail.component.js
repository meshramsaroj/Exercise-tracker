import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/exercises/" + this.props.match.params.id)
      .then(res => this.setState({ exercise: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1>Details</h1>
        <form className="py-3">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Id</label>
            <div className="col-sm-10 mt-2">
              <p>{this.state.exercise._id}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10 mt-2">
              <p>{this.state.exercise.username}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10 mt-2">
              <p>{this.state.exercise.description}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Duration</label>
            <div className="col-sm-10 mt-2">
              <p>{this.state.exercise.duration}</p>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10 mt-2 ">
              <p>{this.state.exercise.date}</p>
            </div>
          </div>
        </form>

        <button className="btn btn-dark float-right">
          <Link to="/">Back</Link>
        </button>
      </div>
    );
  }
}
