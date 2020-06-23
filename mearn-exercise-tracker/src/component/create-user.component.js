import React, { Component } from "react";
import axios from "axios";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    this.setState({
      username: ""
    });
  }

  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username
    };

    console.log(user);

    axios
      .post("http://localhost:4000/users/add", user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    this.setState({
      username: ""
    });
  }

  render() {
    return (
      <div className="container w-75 m-auto">
        <h1>Create User</h1>
        <form onSubmit={this.onSubmit} className="py-4 ">
          <div className="form-group">
            <label>Username: </label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Username..."
              value={this.state.username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div className="form-group">
            <input
              className="btn btn-dark mt-4"
              type="submit"
              value="create user"
            />
          </div>
        </form>
      </div>
    );
  }
}
