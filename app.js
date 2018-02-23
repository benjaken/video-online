const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const index = require('./router/index')
const movie = require('./router/movie')

mongoose.connect("mongodb://localhost:27017/movie")
mongoose.Promise = global.Promise

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('dist'))
app.use('/',index)
app.use('/api',movie)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

module.exports = app