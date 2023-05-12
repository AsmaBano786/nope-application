const express = require('express');
const bodyParser = require('body-parser');
// const doenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");
const dbConn = require("./config/db.config");
const cors=require("cors");
require("dotenv").config();

// create express app
const app = express();
app.set('view engine', 'ejs');

app.use(cors({

  origin:"http://angularhrms.cylsys.com",
 
 }))

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))


// parse requests of content-type - application/json
app.use(bodyParser.json())
// const Pending_report = require('./src/routes/PendingReport.routes')

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require  routes

const userlocationRoutes = require('./src/routes/userlocation.routes');

// using as middleware

app.use('/api/v1/getuserlocation', userlocationRoutes);

app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});


// listen for requests

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  next();
});


app.use(bodyParser.json());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
