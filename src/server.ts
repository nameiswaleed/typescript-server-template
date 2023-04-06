// Importing required modules and dependencies
import express, { Express, Request, Response } from "express";
import configs from "./config";
import { mainRouter, userRouter } from "./routes";
import { connetDB } from "./database";
import { UserController } from "./controllers";
//CONNECTING DATABASE
const database = connetDB();
const userAdding = new UserController().addUser({
  name: "waleed ahmad",
  email: "waleedahmad",
});
// Creating an instance of Express()
const app: Express = express();

// Assigning port number
const port = configs.port;

// Declaring routes to be used
app.use("/", mainRouter);
app.use("/user", userRouter);

// Starting server and logging message upon successful start.
app.listen(port, () =>
  console.log(`app is running on http://localhost:${port}`)
);
