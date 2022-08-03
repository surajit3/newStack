const express = require('express');
const UserController = require('../controllers/user-controller');
const isAuthorized = require('../middlewares/auth-middleware')

const router = express.Router()

// user routing paths
router.route('/register').post(UserController.register)
router.route('/login').post(UserController.login)
router.route('/logout').get(UserController.logout)
router.route('/reset_password').post(isAuthorized, UserController.reset_password)
router.route('/forgot_password').get(UserController.forgot_password)

module.exports = router;