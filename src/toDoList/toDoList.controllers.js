const toDoListDB = [
        {
            id: 1,
            title: "prueba 1",
            description: "realizando la prueba prueba uno",
            isCompleted: false
        }, 
        {
            id: 2,
            title: "prueba 2",
            description: "realizando la prueba prueba dos",
            isCompleted: false
        }
]
/* 
    {
    id: ,
    title: "",
    description: "",
    isCompleted: false
    }
    */

//? mostar todos los ToDoList 
const getAllToDoList = () => {
    return toDoListDB
}

//? mostrar un ToDoList en especifico
const getToDoListById = (id) => {
    const filterDB = toDoListDB.filter((toDo) => toDo.id === id)
    return filterDB[0]
}

//? crear un nuevo ToDoList
const createToDoList = (toDoObj) => {
    if(toDoListDB.length === 0 ) {
        const newToDo = {
            id: 1,
            title: toDoObj.title,
            description: toDoObj.description,
            isCompleted: false
        }
        toDoListDB.push(newToDo)
        return newToDo
    } 
    const newToDo = {
        id: toDoListDB[toDoListDB.length -1].id + 1,
        title: toDoObj.title,
        description: toDoObj.description,
        isCompleted: false
    }
    toDoListDB.push(newToDo)
    return newToDo

}

//? editar el ToDoList en especifico 

const editToDoList = (id, toDoObj) => {
    const index = toDoListDB.findIndex((toDo) => toDo.id === id)
    if( index !== -1) {
        toDoListDB[index] =  toDoObj
        return toDoListDB
    }

}
    //---- estaba intentando solo cambiar solo el isCompleted pero aun no lo logro asi que realize de la forma tradicional llamando a todos----
// const editToDoList = (id, toDoObj) => {
//     const index = toDoListDB.findIndex((toDo) => toDo.id === id)
//     if( index !== -1) {
//         toDoListDB[index] = toDoListDB[index] + toDoObj
//         return toDoListDB
//     }
    
// }
// console.log(toDoListDB[1])

//? eliminar un ToDoList en especifico

const deleteToDoList = (id) => {
    const index = toDoListDB.findIndex((toDo) => toDo.id === id)
    if(index !== -1 ) {
        toDoListDB.splice(index,1)
        return  true
    }
    return false
}



module.exports = {
    toDoListDB,
    getToDoListById,
    createToDoList,
    getAllToDoList, 
    deleteToDoList,
    editToDoList
}