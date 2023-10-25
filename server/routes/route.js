import express from "express";
import { addTodo, getAlltodos, toggleTodoDone } from "../controller/todo-controller.js";




const route= express.Router();

route.post('/todos', addTodo)
route.get('/todos', getAlltodos)
route.get('/todos/:id', toggleTodoDone)
export default route;