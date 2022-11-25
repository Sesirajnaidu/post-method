const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=5000

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())

app.post("/newData",(req,res)=>{
    //console.log(req.body)
    const {name,password,car,gender}=req.body
    console.log(name,password,car,gender)
    res.send("added")
})

/*app.get("/", (req,res)=>{
 res.send("hi there today is thursday")
})*/

app.listen(port,()=>console.log("server 5000 is running"))