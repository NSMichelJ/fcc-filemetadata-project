const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express();

// CORS
app.use(cors({ optionsSuccessStatus: 200 }));

// Body parser
app.use(fileUpload({
  debug: true
}));
app.use(express.json())

// Static content
app.use(express.static('public'))

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/api/fileanalyse', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
      error: 'No file where uploaded'
    })
  }

  const {name, mimetype, size} = req.files?.upfile
  res.status(200).json({
    name,
    type: mimetype,
    size
  })
})


// listen for requests
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});