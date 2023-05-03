const express=require('express')
const app=express()
const PORT=8000
const cors=require('cors')

app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/', (req,res)=>{
    const coinFlip=Math.random()*2
    if(coinFlip>1){
        res.json('Heads')
    }else{
        res.json('Tails')
}
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log(`The server is now running on ${PORT}! Fly port, not aft!`)
})