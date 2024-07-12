require("dotenv").config();
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
const cors = require("cors");
const root = require("./routes/root");
const { connectDb } = require("./database");

const port = 8080;

connectDb(io);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", root);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
