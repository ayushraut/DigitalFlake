const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");
const UserModel2 = require("./models/Users2");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      description: req.body.description,
      status: req.body.status,
    }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findOneAndDelete({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Product

app.get("/users2", (req, res) => {
  UserModel2.find({})
    .then((users2) => res.json(users2))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel2.findById({ _id: id })
    .then((users2) => res.json(users2))
    .catch((err) => res.json(err));
});

app.put("/editUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel2.findByIdAndUpdate(
    { _id: id },
    {
      cate: req.body.cate,
      ps: req.body.ps,
      name: req.body.name,
      mrp: req.body.mrp,
      img: req.body.img,
      stat: req.body.stat,
    }
  )
    .then((users2) => res.json(users2))
    .catch((err) => res.json(err));
});

app.post("/addUser", (req, res) => {
  UserModel2.create(req.body)
    .then((users2) => res.json(users2))
    .catch((err) => res.json(err));
});

app.delete("/deleteUser2/:id", (req, res) => {
  const id = req.params.id;
  UserModel2.findOneAndDelete({ _id: id })
    .then((users2) => res.json(users2))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running");
});
