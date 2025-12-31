const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

const noteRoute = require('./routes/noteRoute')
app.use('/notes', noteRoute)


app.get('/', (req, res) =>{
    res.send('Smart Study Intelligence Server is running');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT);
})