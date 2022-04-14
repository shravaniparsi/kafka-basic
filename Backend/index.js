//import the require dependencies
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(bodyParser.json());

const { addBook } = require("./kafka/client");

//Allow Access Control
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

// ---- used arrow syntax function -- previously it was anonymous function ----
app.post("/book", addBook);

//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");
