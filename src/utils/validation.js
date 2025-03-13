const validator = require('validator');

const validateSingUpData = (req) => {
        const {firstName, lastName, email, password } = req.body;
        if(!firstName || !lastName){
            throw new Error('Invalid Name');
        }
        if(!validator.isEmail(email)){
          throw new Error('Invalid Email');
        }
    }

module.exports = {
    validateSingUpData,
}