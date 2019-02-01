const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todos = require('./routes/api/todo.routes');
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use('/api/todos', todos);

app.use((err, req, res, next) => {
    console.log(err);
    next();
  });

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});