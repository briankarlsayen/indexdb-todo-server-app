const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const server = require("http").createServer(app);
require("dotenv").config();
const { errorHandler } = require("./src/middlewares/errorHandler");
const { PORT } = process.env;

// middlewares
app.use(cors());
app.use(express.json());

// db connect
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose");
});

// routes
app.get("/", (_req, res) => {
  res.status(200).json({ message: "Routes alive" });
});
require("./routes")(app);

// error handler
app.use(errorHandler);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
