const express = require('express')
const mongoose = require('mongoose')

const app=express()

app.use(express.json())
const items =require('./routes/API/items')
app.use('/api/items',items)
app.use('/api/items',items)
app.use('/api/items',items)


const db=require('./configuration/Keys').mongoURI

mongoose.connect(db)
.then(()=>console.log('MongoDB well connected'))
.catch(err=>console.log('Mongoo DB not connected' +err))
const port = process.env.PORT || 5000
app.listen(port, ()=>console.log(`Server is running on port ${port}...`))
