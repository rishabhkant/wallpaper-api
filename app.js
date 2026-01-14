import { createCanvas } from "canvas";
import express from "express";
const app = express();
const port = 3000;


app.get('image', (req, res)=>{
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height) ;

    if(!width || !height){
        return res.status(400).send("Width and height required");
    }

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#1a1a1a"
    ctx.fillRect = (0,0 ,width, height);

    
})

app.listen(port, ()=>{
    console.log(`Listening on: ${port}`);
})