import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/users/list").then(res => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username),
          username: res.data[0].username
        });
      }
    });

    this.setState({
      users: ["test user"],
      username: "test user"
    });
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    axios
      .post("http://localhost:4000/exercises/add", exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    window.location = "/";
  }

  render() {
    return (
      <div className="container w-75 m-auto">
        <h1>Create Exercise Log </h1>
        <form  className="py-5 " onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <select
              className="form-control"
              ref={this.setTextInputRef}
              required
              value={this.state.value}
              onChange={this.onChangeUserName}
            >
              {this.state.users.map(user => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter which exercise you did... "
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter how much time you take..."
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>

          <div className="form-group">
            <input
              className="btn btn-dark mt-4"
              type="submit"
              value="create exercise log"
            />
          </div>
        </form>
      </div>
    );
  }
}
