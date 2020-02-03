const express = require('express');
const router = express.Router();

// @route GET v1/users
// @desc  Test
// @access Public

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User route');
});

module.exports = router;
