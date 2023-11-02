require('dotenv').config()

const cors = require('cors')
const express = require('express')

const app = express()

const corsOptions = { }

app.use(cors(corsOptions))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`)
})