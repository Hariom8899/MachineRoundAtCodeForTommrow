const express = require('express');
const { connectDB } = require('./config/dbConnection');
const app = express();
app.use(express.json());
const authRouter = require('./routes/auth');

app.use('/', authRouter);

connectDB().then( () => {
console.log('DB connected SuccessFully');
app.listen(3000, () => console.log('Server Started at Port 3000'));
})
.catch( (err) => {
console.log('Error Occured in DB connection' + err.message);
})