const router = require("express").Router();
const User = require("../model/user.model");

router.get("/list", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error : " + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User Added..."))
    .catch(err => res.json("Error: " + err));
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json("Error : " + err));
});

router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json("Error: " + err));
});

router.post("/update/:id", (req, res) => {
  User.findById(req.params.id).then(
    user => (
      (user.username = req.body.username),
      user
        .save()
        .then(() => res.json("User updated..."))
        .catch(err => res.json("Error: " + err))
    )
  );
});

module.exports = router;
