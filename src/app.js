const express=require('express')
const app =express()
app.use('/raju',(req,res)=>{
    res.sendStatus(200)
})
app.listen(3000)