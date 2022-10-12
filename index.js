const express = require("express");
const format = require("date-format");
const app = express();


const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello from Sample Social App</h1>");
});

app.get("/favicon.ico", (req, res) => {
    res.status(200).send("<h1>Hello from Image</h1>");
  });

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "Sai",
    folowers: 6,
    follows: 7,
    date: format.asString("dd-MM-yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "Sai",
    folowers: 880,
    follows: 10,
    date: format.asString("dd-MM-yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "Sai",
    folowers: 80,
    follows: 1,
    date: format.asString("dd-MM-yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json(instaSocial);
});

app.get("/api/v1/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
