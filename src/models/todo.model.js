const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      default: "",
    },
    isChecked: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const todos = mongoose.model("todos", todoSchema);

module.exports = todos;
