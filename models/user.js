const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    homeTeam: {
        type: String
    },
    awayTeam: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    homeScore: {
        type: Number,
        default: 0
    },
    awayScore: {
        type: Number,
        default: 0
    }
})

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    matches: [matchSchema]
})


const User = mongoose.model('User', userSchema)


module.exports = User 

        