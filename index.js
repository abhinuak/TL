require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Route/router')
require('./DBconnection/connection')
// const mongoose = require('mongoose')

const tmServer = express()


tmServer.use(cors())
tmServer.use(express.json())
tmServer.use(router)
const PORT = 4000 || process.env.PORT

tmServer.listen(PORT,()=>{
    console.log(`task manager started at port ${PORT}..`);
})

tmServer.get('/',(req,res)=>{
    res.send(`<h1>task manager running successfull</h1>`)
})
