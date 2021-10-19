import express from "express";
 import consign from "consign";
const app = express();
var bodyParser = require('body-parser');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

 consign()
    .include("database/mongoose.js")
    .then("models")
    .then("schema")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);