import React from 'react';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/navbar.component';
import  ExerciseList  from './component/exerciseList.component'
import User from './component/create-user.component';
import CreateExercise from './component/create-exercise.componet'
import UpdateExercise from './component/update-exercise.component';



function App() {
  return (
    <Router>
    <Navbar />
    <br />
    <Route path="/" exact component={ExerciseList} />
    <Route path="/create"  component={CreateExercise} />
    <Route path="/create-user"  component={User} />
    <Route path="/update/:id" component={UpdateExercise} />

    </Router>
  );
}

export default App;
