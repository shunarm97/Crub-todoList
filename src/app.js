const express = require('express')
const toDoListRouter = require('./toDoList/toDoList.router').router
require('dotenv').config()
const app = express()
const port = process.env.PORT
app.use(express.json())

app.use('/api/v1', toDoListRouter)



// app.get('/', (req,res) => {
//     res.json({
//         name: "alenxander",
//         age: 20
//     })
// })

// app.post('/', (req,res) => {
//     res.json({
//         mesage: 'todo bien'
//     })
// })

app.listen(port, () => {
    console.log(`Server starder at port ${port}`)
})