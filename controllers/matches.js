const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const Match = require('../models/user.js')




router.get('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id)
        res.render('match/index.ejs', {
            match: currentUser.match
        })
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});




router.get('/new', async (req, res) => {
    res.render('match/new.ejs')
})


// router.get('/matches', async (req, res) => {
//     try {
//         const currentUser = await User.findById(req.session.user._id)
//         res.render('match/index.ejs', {
//             match: currentUser.match
//         })
//     } catch (error) {
//         console.log(error)
//         res.redirect('/')
//     }
// })











module.exports = router;