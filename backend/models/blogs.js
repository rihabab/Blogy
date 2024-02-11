const mongoose = require('mongoose')

const Schema= mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    repos: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
},{ timestamps: true })

module.exports = mongoose.model('Blog', blogSchema)
