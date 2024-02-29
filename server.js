import express from 'express';
import  'dotenv/config';

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=> {
    return res.send("Hello server");
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
import routes from './routes/index.js'
app.use(routes)
app.use(routes)

app.listen(PORT,()=> console.log(`server is running On PORT:- ${PORT}`))