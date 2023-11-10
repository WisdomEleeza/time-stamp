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
app.get('/api/:date', function (req, res) {
  const inputDate = req.params.date;

  if (!inputDate) {
    const currentDate = new Date();
    res.json({
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString(),
    });
  } else {
    const date = new Date(isNaN(inputDate) ? inputDate : parseInt(inputDate));

    if ((date)) {
      // Format the UTC date as "Thu, 01 Jan 1970 00:00:00 GMT"
      const formattedUTC = date.toUTCString();
      
      res.json({
        unix: date.getTime(),
        utc: formattedUTC,
      });
    } else {
      res.json({ error: "Invalid Date" });
    }
  }
});










// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
