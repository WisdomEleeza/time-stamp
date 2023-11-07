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


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  const inputData = req.params.date
  if(!inputData){
    const currentTimestamp = Data.now()
    res.json({ unix: currentTimestamp, utc: Date.now(currentTimestamp).toUTCString() })
  } else {
    const timestamp = new Date(data).getDate()
  }


  // if(!isNaN(timestamp)) {
  //   res.json({ unix: timestamp})
  // } else {
  //   res.json({error: "Invalid date"})
  // }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
