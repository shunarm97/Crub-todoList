const { getAllToDoList, getToDoListById, createToDoList, deleteToDoList, editToDoList } = require("./toDoList.controllers")


const getAll = (req, res) => {
    const data = getAllToDoList()
    res.status(200).json(data)
}

const getById = (req, res) => {
    const id = Number(req.params.id)
    if(id) {
        const data = getToDoListById(id)
        if(data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({message: 'id invalid'})
        }
    } else {
        res.status(400).json({message: 'id is not number'})
    }
}

const create = (req, res) => {
    const data = req.body
    if(data.title && data.description) {
        const response = createToDoList(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({message: "data invalid "})
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if(typeof id ==='number') {
        const deleted = deleteToDoList(id)
        if(deleted) {
            res.status(204).json({message: "Todo delete succesfully"})
        } else {
            res.status(400).json({message: "Todo not exist"})
        }
    } else {
        res.status(400).json({message: "Todo no is valid"})
    }
}

const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if(data.id && data.title && data.isCompleted && data.description) {
//--- igualmente aqui quise hacer que solo recibiera dotos especificos en el isCompleted----    
  //if(data.isCompleted === false || data.isCompleted === true) {
        const response = editToDoList(id, data)
        res.status(201).json({mesasege: "ToDo edit succesfully", data:response})
    } else {
        res.status(400).json({message: "invalid arguments"})
    }   
}

module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}