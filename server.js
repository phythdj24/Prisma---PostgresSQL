import express from 'express';
import  'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=> {
    return res.send("Hello server");
})

app.listen(PORT,()=> console.log(`server is running On PORT:- ${PORT}`))