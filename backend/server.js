require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')
const blogroutes = require('./routes/blogs')


const app = express()

app.use(express.json())
app.use((req,res, next) =>{
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/blogs',blogroutes)

// connecting to db
mongoose.connect(process.env.MONGO)
    .then(()=>{
        app.listen(process.env.PORT, () => {
            console.log('connected and listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
})


