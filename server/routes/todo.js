const express = require('express')
const todoRouter = express.Router()
const todoController = require('../controllers/todo')


todoRouter.get('/',todoController.getAllTodos)

todoRouter.post('/', todoController.createTodo)

todoRouter.patch('/:id', todoController.updateTodo)

todoRouter.delete('/:id',todoController.deleteTodo)

module.exports = todoRouter;