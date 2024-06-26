const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const AccountListRoutes = require('./routes/apiRouter')
const path = require('path')
require('dotenv').config();
const riotApiRoutes = require('./routes/riotApiRouter')
app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB database Connected...'))
    .catch((err) => console.log(err))


app.use('/api', AccountListRoutes)
app.use('/update', riotApiRoutes)

app.listen(process.env.PORT, () => console.log(`App listening at http://localhost:${process.env.PORT}`))

module.exports = app; // Export the Express app