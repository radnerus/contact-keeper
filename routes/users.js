const express = require('express');
const User = require('../models/User');

const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => res.send(req.body));

module.exports = router;