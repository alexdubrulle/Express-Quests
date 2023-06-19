require("dotenv").config();
const express = require("express");

app.put("/api/users/:id", userList.userUpdate);
const app = express();
app.use(express.json());
const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
  app.get("/", welcome);
};
const movieHandlers = require("./movieHandlers");
const userList = require("./userList");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.get("/api/users", userList.getUsers);
app.get("/api/users/:id", userList.getUserById);
app.post("/api/users", validateUser, userList.postUser);
app.put("/api/users/:id", validateUser, userList.updateUser);
app.delete("/api/users/:id", userList.deleteUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
