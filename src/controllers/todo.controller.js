const Todo = require("../models/todo.model");

exports.displayTodos = async (req, res, next) => {
  try {
    const todo = await Todo.find({ isDeleted: false })
      .sort({ updatedAt: -1 })
      .exec();
    return res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};
exports.viewTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ _id: id }).exec();
    return res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};
exports.createTodo = async (req, res, next) => {
  const { label, isChecked } = req.body;
  try {
    const todo = await Todo.create({ label, isChecked });
    return res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};
exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const { label, isChecked } = req.body;
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id },
      { label, isChecked },
      { new: true }
    ).exec();
    if (!todo)
      return res.status(422).json({ message: "Unable to update todo" });
    return res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

exports.archiveTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: id },
      { isDeleted: true }
    ).exec();
    if (!todo)
      return res.status(422).json({ message: "Unable to delete todo" });
    return res.status(201).json({ message: "Successfully deleted" });
  } catch (err) {
    next(err);
  }
};
