const express = require('express');
const { connectDB } = require('./config/dbConnection');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/', authRouter);

connectDB().then( () => {
console.log('DB connected SuccessFully');
app.listen(3000, () => console.log('Server Started at Port 3000'));
})
.catch( (err) => {
console.log('Error Occured in DB connection' + err.message);
})