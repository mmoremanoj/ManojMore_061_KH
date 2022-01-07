const express = require("express");
const app = express();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const { selectUser, addUser } = require("./user.js");

app.get("/userList", async (req, res) => {
  const list = await selectUser();
  res.json(list);
});

app.post("/addNewUser", async (req, res) => {
  const user = req.body;
  await addUser(user);
  res.json({ message: "user added" });
});

app.listen(6100, () => console.log("Server Started"));
