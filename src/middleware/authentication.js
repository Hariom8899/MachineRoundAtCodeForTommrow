
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
  try{
     const {token} = req.cookies;
     const decodedValue = await jwt.verify(token, "secretKey");
     const {_id} = decodedValue;
     if(!_id){
        throw new Error('Inalid Token');
     }
     const user = await User.findById({_id:_id});
     console.log(user);
     req.user = user;
     next();
  }
  catch(err){
    res.status(400).send("User Authentication: "+err.message);
  }
}

module.exports = {
    authenticateUser,
}