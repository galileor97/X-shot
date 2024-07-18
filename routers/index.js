const router = require('express').Router();
const Controller = require('../controllers');
const User = require('../controllers/UserController');


//auth
router.get('/signin', User.signIn)
router.get('/signup', User.signUp)



router.get('/', Controller.homePage)


module.exports = router;