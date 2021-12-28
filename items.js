const express = require('express')
const router =express.Router()

//import schema

router.get('/',(req,res)=>{
    console.log(req)
    //Schema.find()
    res.send('ok')
})

router.get('/:id',()=>{
    id = req.params.id
    //call to schema for searching item using id 
})
router.post('/',(req,res)=>{
    console.log(req)
    res.send('ok')
})
module.exports=router;