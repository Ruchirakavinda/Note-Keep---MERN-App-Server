const router = require('express').Router()

//register User
router.post('/register', (req, res) =>{
    res.json({msg: "Register a User"})
})

router.post('/login', (req, res) =>{
    res.json({msg: "Login a User"})
})
module.exports = router