const router = require("express").Router();
const Exercise = require("../model/excercise.model");

router.get("/list", (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error : " + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.now();
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added..."))
    .catch(err => res.json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then(exercises => res.json(exercises))
    .catch(err => res.json("Error : " + err));
});

router.delete("/:id", (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(exercises => res.json(exercises))
    .catch(err => res.json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
  Exercise.findById(req.params.id)
    .then(
      exercise => (
        (exercise.username = req.body.username),
        (exercise.description = req.body.description),
        (exercise.duration = req.body.duration),
        (exercise.date = Date.now()),
        exercise
          .save()
          .then(() => res.json("Exercise updated..."))
          .catch(err => res.json("Error: " + err))
      )
    )
    .catch(err => res.json("Error: " + err));
});

module.exports = router;
