const router = require('express').Router()
const httpToDoList = require('./toDoList.http')


router.route('/ToDoList')
        .get(httpToDoList.getAll)
        .post(httpToDoList.create)


router.route('/ToDoList/:id')
        .get(httpToDoList.getById)
        .delete(httpToDoList.deleteById)
        .put(httpToDoList.update)


module.exports = {router}