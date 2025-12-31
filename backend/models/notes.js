const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    subject:{
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        enum: ['easy', 'medium' , 'hard'],
        required: true
    },
    confidence:{
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    lastRevised:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', noteSchema)