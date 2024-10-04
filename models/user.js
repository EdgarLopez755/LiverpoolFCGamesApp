const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
    homeTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    date: {
        type: Date,
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

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const Match = mongoose.model('Match', matchSchema)
const User = mongoose.model('User', userSchema)

module.exports = { Match, User }

        