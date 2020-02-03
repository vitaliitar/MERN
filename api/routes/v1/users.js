const express = require('express');
const router = express.Router();
const User = require('../../models/User');


// @route GET v1/users
// @desc  Test
// @access Public

router.post('/', async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  try{
    let user = await User.findOne({email});

    if(user){
      return res.status(400).json({
        errors: [{msg: 'User already exist'}]
      })
    }

    user = new User({
      name, email, password
    });

    await user.save();

  }catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }

});

module.exports = router;
