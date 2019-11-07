const express = require('express');
const app = express();
var bodyParser = require("body-parser");
// var mongoose = require("mongoose");
// var session = require("express-session");
// var flash = require("express-flash");

//config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
const server = app.listen(8000); 
app.listen(8000, () => console.log("listening on port 8000"));
