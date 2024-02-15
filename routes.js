module.exports = function (app) {
  const todoRouter = require("./src/routes/todo.router");

  app.use("/todos", todoRouter);
};
