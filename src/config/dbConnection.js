const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
   await  mongoose.connect('mongodb+srv://hariomtiwari2288:Hariom1234@hariomfirstdb.egr0c.mongodb.net/NodeTest', { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    connectDB
}
