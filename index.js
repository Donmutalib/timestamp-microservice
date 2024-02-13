require('dotenv').config()
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204


app.get('/api/timestamp/:date?', (req, res) => {

  let { date } = req.params
  if (!date) {
    return res.json({ unix: Number(new Date()), utc: new Date().toUTCString() })
  }

  if (+date) {
    return res.send({ unix: Number(date), utc: new Date(Number(date)).toUTCString() })
  }

  date = new Date(date)

  if (date == 'Invalid Date') {
    return res.status(400).send({ error: "Invalid Date" })
  }
  res.json({ unix: Number(date), utc: date.toUTCString() })
})



const port = process.env.PORT

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});