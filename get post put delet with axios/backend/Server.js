const express = require('express');
const app = express();
const mongoose = require('mongoose')
const { MongodbUrl, Port } = require('./config')
const cors=require('cors')
app.use(express.json())
app.use(cors())



app.get('/', (req, res) => {
    res.send(`Welcome to my new project`)
})
app.use('/books', require('./routes/booksRoute'))
mongoose.connect(MongodbUrl).then(() => {
    console.log('App connected to database');
    app.listen(Port, () => {
        console.log('App connected to port 5555')
    })
})
