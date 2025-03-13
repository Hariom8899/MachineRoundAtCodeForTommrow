const mongoose = require('mongoose');

const connectDB = async () => {
   await  mongoose.connect('mongodb+srv://hariomtiwari2288:Hariom1234@hariomfirstdb.egr0c.mongodb.net/NodeTest');
}

module.exports = {
    connectDB
}
