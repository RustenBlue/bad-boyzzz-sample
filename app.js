//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/menu.html", function(req, res){
  res.sendFile(__dirname + "/views/menu.html");
});

app.get("/signup.html", function(req, res){
  res.sendFile(__dirname + "/views/signup.html");
});

app.get("/statement.html", function(req, res){
  res.sendFile(__dirname + "/views/statement.html");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server Started");
});
