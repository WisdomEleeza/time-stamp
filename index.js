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

function isValidDate(date) {
  return !isNaN(date);
}

// your first API endpoint... 

app.get('/api/:date?', function (req, res) {
  const inputDate = req.params.date;

  if (!inputDate) {
    // Handle requests with an empty date parameter
    const currentDate = new Date();
    res.json({
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString(),
    });
  } else {
    const date = new Date(inputDate);

    if (isValidDate(date)) {
      res.json({
        unix: date.getTime(),
        utc: date.toUTCString(),
      });
    } else {
      res.json({ error: "Invalid Date" });
    }
  }
});









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






// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
