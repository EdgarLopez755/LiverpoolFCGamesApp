const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

process.env.MONGODB_URI='mongodb+srv://edgarlopez755:zHGPeUzilXAYqOYc@student-cluster.z2jsf.mongodb.net/liverpool-app?retryWrites=true&w=majority&appName=Student-cluster'
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB ')
})

mongoose.connect(process.env.MONGODB_URI);







app.listen(3000, () => {
    console.log('Listening on Port 3000')
})