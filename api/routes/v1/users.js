const express = require('express');
const router = express.Router();

// @route GET v1/users
// @desc  Test
// @access Public

router.get('/', (req, res) => res.send('USer route'));

module.exports = router;
