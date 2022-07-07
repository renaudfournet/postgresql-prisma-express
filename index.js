const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

const app = express()
const PORT = 8080

app.use(cors())

app.use(bodyParser.json())

app.use('/users', userRoute)
app.use('/posts', postRoute)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
