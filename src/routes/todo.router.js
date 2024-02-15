const express = require("express");
const todoController = require("../controllers/todo.controller");

const router = express.Router();

router.post("/", todoController.createTodo);
router.get("/", todoController.displayTodos);
router.get("/:id", todoController.viewTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.archiveTodo);

module.exports = router;
