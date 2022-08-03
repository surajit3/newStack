const jwt = require('jsonwebtoken');
const User = require('../models/user-model')

const isAuthorized = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if(!token) { res.json({status: 'failed', message: 'not'}) }
        const userID = await jwt.verify(token, process.env.SECRET_KEY).userID;

        const user = await User.findById(userID)
        next()
    } catch (error) {
        res.status(401).json({ status: 'failed', message: 'Login Require' })
    }
}

module.exports = isAuthorized;
