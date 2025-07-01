const express = require("express");

const db = require("./config/db");
const userModel = require("./model/userModel");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));



app.post("/insertData", async (req, res) => {
    const data = await userModel.create(req.body);
    res.send(data);
});

app.get("/", async (req, res) => {
    const data = await userModel.find();
    res.send(data);
});

app.get("/index", (req, res) => {
    res.render("index");
});

app.delete("/:id",async(req,res)=>{
    const id=req.params.id;
    console.log(id)
    await userModel.findByIdAndDelete(id);
    res.send("deleted");
})

app.patch("/:id",async(req,res)=>{
    const id=req.params.id;
    const data=await userModel.findByIdAndUpdate(id,res.body)
    res.send(data); 
})

app.listen(6789, () => {
    console.log("server connect");
});  
