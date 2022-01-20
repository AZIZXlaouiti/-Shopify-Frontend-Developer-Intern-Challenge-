const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000
process.env.NODE_ENV === 'production'
    ? app.use(express.static('build'))
    : app.use(express.static('build'));

app.listen(
    PORT , ()=> console.log("listening on port 8000")
)