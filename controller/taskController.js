const task = require('../model/taskSchema')
const taskController = {
    createTask:async(req,res)=>{
        try{
            const task = new Task(req.body)
            await task.save()
            res.status(200).json(task)
        }
        catch(err){
            res.status(406).json(`create api failed error:${err}`)

        }
    },
    getAllTasks:async(req,res)=>{
        try{
            const tasks = await Task.find()
            res.json(tasks)

        }catch(err){
            res.status(500).json(`get all task api failed Error:${err}`)
        }
    },
    getOneTask:async(req,res)=>{
        try{
            const task = await Task.findById(req.params.id)
            if(task){
                res.json(task)
            }else{
                res.status(404).json("task not found")
            }
            
        }catch(err){
            res.status(500).json(err)
        }
    },
    updateTask:async(req,res)=>{
        try{
            const task = await Task.findByIdAndUpdate(req.params.id , req.body,{new:true})
            res.json(task)
        }catch(err){
            res.status(400).json(err)
        }
    },
    deleteTask:async (req,res)=>{
        try{
            await Task.findByIdAndDelete(req.params.id)
            res.json("task deleted successfully")
        }
        catch(err){
            res.status(500).json(err)
        }
    }
}
module.exports=taskController