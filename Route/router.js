const express= require('express')
const router = new express.Router()
const userController = require('../controller/userController')
const taskController = require('../controller/taskController')
// register api cll

router.post('/user/register',userController.register)

// login api call

router.post('/user/login',userController.login)

// create
router.post('/task',taskController.createTask)

// get
router.get('/task',taskController.getAllTasks)

// get one

router.get('/task:id',taskController.getOneTask)

// update

router.put('/task:id',taskController.updateTask)

// delete

router.delete('/task:id',taskController.deleteTask)


module.exports = router