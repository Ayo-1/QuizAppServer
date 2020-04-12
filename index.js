const cors = require('cors')
const bodyparser = require('body-parser')
const path = require("path")
const express = require('express')
const port = process.env.PORT || 4000
const app = express()
const router = require('./routes/users')
const questions = require('./routes/questions')
const results = require('./routes/results')
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
require('dotenv').config();




app.use('/', router)

app.use('/questions', questions)

app.use('/results', results)


app.listen(port, () => console.log(`server running on port ${port}`))
