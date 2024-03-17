const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true

    },
    startDate:{
        type:Date,
        default:Date.now
    },
    endDate:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        enum:['todo','in-progress','completed'],
        default:'todo'
    },
    progress:{
        type:Number,
        default:0
    },
    reminders:[{
        type:Date
    }]
})
const task = mongoose.model("task",taskSchema)
module.exports=task;