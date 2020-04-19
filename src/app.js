const express = require("express");
const User = require("./UserModel");
const app = express();

app.use(express.json());

app.post("/api/v1/users", async (req, res) => {
  const { name, age } = req.body;
  const user = await new User({ name, age }).save();

  res.json(user);
});

app.post("/api/v2/users", async (req, res) => {
  const { name, age, email } = req.body;
  const user = await new User({ name, age, email }).save();

  res.json(user);
});

module.exports = app;
