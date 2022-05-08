const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

//register User
router.post('/register', userCtrl.registerUser )

router.post('/login', userCtrl.loginUser)


//verify Token
router.get('/verify', userCtrl.verifiedToken)

module.exports = router