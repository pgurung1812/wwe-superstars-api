const express= require("express")
const app=express()
const PORT=8001

const superstars={
   "bret hart": {   "name" :"Bret Hart",
        "match": 82,
        "fightsWon": 72,
        "fightsLoss":7
    },
   "shawn michaels": {
        "name" :"Shawn Michaels",
        "match": 81,
        "fightsWon": 71,
        "fightsLoss":6
    },
   "triple h": {
        "name" :"Triple H",
        "match": 80,
        "fightsWon": 70,
        "fightsLoss":5
    }

}
app.get("/",(request,response)=>{
   response.sendFile(__dirname +"/index.html")
})

app.get("/api/:name",(request,response)=>{
  
  let queriedName=request.params.name.toLowerCase()
  let keysArr=Object.keys(superstars)
  
   keysArr.forEach((key)=>{
    if(key===queriedName){
        response.json(superstars[key])
    }
   })
 
})

app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT} !`)
})