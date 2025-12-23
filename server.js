const express=require('express');
const connectDB=require('./db')
const app=express();
connectDB();


//middleware to parse JSON bodies
app.use(express.json());

//test routes
app.get('/', (req,res)=>{
    res.send('Smart study backend running.');
});

app.post('/test', (req, res)=>{
    res.json({
        message: "POST request successful",
        receivedData: req.body
    });
});
app.listen(5000, ()=> {
    console.log("Server running on port 5000");
});