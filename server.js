const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')
const session = require('express-session')
const Match = require('./models/user.js')

const authController = require('./controllers/auth.js')
const matchesController = require('./controllers/matches.js')
const matchControllers = require('./controllers/match.js')
const isSignedIn = require('./middleware/is-signed-in')
const passUserToView =require('./middleware/pass-user-to-view.js')






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
app.get('/', (req, res) => {
    res.render('index.ejs', { user: req.session.user });
  });

// app.get('/match', async (req, res) => {
//     try {
//         const matches = await Match.find().populate('homeTeam awayTeam'); 
//         res.render('match/show.ejs', { matches });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('An error occurred');
//     }
// });


// app.get('/match', (req, res) => {
//     res.send('hello')
//     // res.render('match/show.ejs', { user: req.session.user }); 
// });

// app.get('/match/new', (req, res) => {
//     const user = req.session.user;
//     res.render('/match/new.ejs', { user: req.session.user })
// })

// app.get('/match/:matchId', async(req, res) => {
//     const match = await match.findById(req.params.matchId)
//     res.render('match/show.ejs', {fruit: match}) // DONE
// })

// app.post('/match', async(req, res) => {
//     try {
//         const currentUser = await User.findById(req.session.user._id)
//         currentUser.match.push(req.body)
//         await currentUser.save()
//         res.redirect(`/users/${req.session.user._id}/match`)
//     }catch (error) {
//         console.log(error)
//         res.redirect('/match')
//     }
// })  



app.use('/auth', authController)
app.use(isSignedIn)
app.use('/match', matchesController)
app.use('/test', matchControllers)




app.listen(3000, () => {
    console.log('Listening on Port 3000')
})