const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let student = [
  { id: "1", name: "ss" },
  { id: "2", name: "dd" },
];

app.get("/", (req, res) => {
  res.render("home", { student, editData: null });
});

app.post("/insertData", (req, res) => {
  const { id, name } = req.body;
  student.push({ id, name }); 
  res.redirect("/");
});

app.get("/delete", (req, res) => {
  const id = req.query.id;
  student = student.filter((el) => el.id !== id);
  res.redirect("/");
});

app.get("/update", (req, res) => {
  const id = req.query.id;
  const editData = student.find((el) => el.id === id);
  res.render("home", { student, editData });
});

app.post("/updateData", (req, res) => {
  const { id, name } = req.body;
  student = student.map((el) => (el.id === id ? { id, name } : el));
  res.redirect("/");
});

app.listen(8918, () => {
  console.log("Server listening on port 8918");
});
