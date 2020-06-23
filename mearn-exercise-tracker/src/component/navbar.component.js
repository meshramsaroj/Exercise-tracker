import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark text-light border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Exercise Tracker</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="p-2 text-light" to="/">
            Exercises
          </Link>
          <Link className="p-2 text-light" to="/create-user">
            Create user
          </Link>
          <Link className="p-2 text-light" to="/create">
            Create Exercise log
          </Link>
        </nav>
      </div>
    );
  }
}
