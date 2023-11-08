// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

const isValidData = (data) => data.toUTCString() === "Invalid Date";

// your first API endpoint... 
app.get("/api/:date?", function (req, res) {
  let data = new Date(+req.params.date)

  if(isValidData(date)){
    date = new Date(req.params.date)
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  })







  // const inputDate = req.params.date;
  // let response = {};

  // if (!inputDate) {
  //   // Handle empty date parameter
  //   const currentTimestamp = Date.now();
  //   const currentUTC = new Date(currentTimestamp);
  //   response = { unix: currentTimestamp, utc: currentUTC.toUTCString() };
  // } else {
  //   // Check if the input date is valid
  //   const timestamp = new Date(inputDate).getTime();

  //   if (!isNaN(timestamp)) {
  //     const inputUTC = new Date(timestamp);
  //     response = { unix: timestamp, utc: inputUTC.toUTCString() };
  //   } else {
  //     response = { error: "Invalid Date" };
  //   }
  // }

  // res.json(response);
});






// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
