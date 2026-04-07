import express from "express";

const app = express();

app.get("/home", (req,res)=>{
    res.status(200).send("hello from express.js ");
});

const port = process.env.PORT;
app.listen(port, ()=>console.log(`server started on Http://localhost:${port}`));