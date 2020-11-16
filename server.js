const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const {error} = require('console')
require('dotenv').config()

const postRouters = require('./routes/posts')

const app = express()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

const port = process.env.PORT || 5000
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rg6zm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

//1st way
// mongoose
//   .connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//   .then(() => app.listen(port, () => console.log(`server run on port ${port}`)))
//   .catch(error => console.log(error.message))

// mongoose.set('useFindAndModify', true)

//2nd way
mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
  console.log('conencted')
})
app.listen(port, () => console.log(`the server run on port ${port}`))

//Routes
app.get('/', (req, res, next) => {
  res.send('Hello Word')
})

app.use('/api/post', postRouters)
