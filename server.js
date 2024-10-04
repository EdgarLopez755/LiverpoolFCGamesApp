const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')

const isSignedIn = require('./middleware/is-signed-in.js')
const passUserToView =require('./middleware/pass-user-to-view.js')

// const authController = require('./controllers/auth.js')
// const matchesController = require('./controllers/matches.js')



process.env.MONGODB_URI='mongodb+srv://edgarlopez755:zHGPeUzilXAYqOYc@student-cluster.z2jsf.mongodb.net/liverpool-app?retryWrites=true&w=majority&appName=Student-cluster'
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB ')
})

mongoose.connect(process.env.MONGODB_URI)


app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
)

app.use(passUserToView)
// app.use('/auth', authController)
app.use(isSignedIn)
// app.use('./matches', matchesController)





app.listen(3000, () => {
    console.log('Listening on Port 3000')
})