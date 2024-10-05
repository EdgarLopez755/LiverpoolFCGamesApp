const express = require('express')
const router = express.Router()
const User = require('../models/user.js')



router.get('/', (req, res) => {
    res.send('testing')
})

// router.get('/', (req, res) => {
//     res.render('match/index.ejs')
//   });


// // router.get('/match', (req, res) => {
// //       res.render('match/show.ejs')
// //   })


// router.get('/', async (req, res) => {
//     res.send('bye')
//     // try {
//     //     const matches = await Match.find().populate('homeTeam awayTeam'); 
//     //     res.render('match/index', { matches });
//     // } catch (err) {
//     //     console.error(err);
//     //     res.status(500).send('An error occurred');
//     // }
// });

// router.get('/match/show', (req, res) => {
//     res.render('match/show.ejs')
// })

// router.get('/:id', async (req, res) => {
//     try {
//       const match = await match.findById(req.params.id);
//       if (!rsvp) {
//         return res.status(404).send('Not Found');
//       }
      
//       res.render('match/show.ejs', { match }); 
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('An error occurred');
//     }
//   });

// router.post('/', async(req, res) => {
//     try {
//         const currentUser = await User.findById(req.session.user._id)
//         currentUser.match.push(req.body)
//         await currentUser.save()
//         res.redirect(`/users/${req.session.user._id}/match`)
//     }catch (error) {
//         console.log(error)
//         res.redirect('/')
//     }
// })  






module.exports = router;