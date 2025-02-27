const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From server2!");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Shubham", lastName: "Algunde" });
});

app.post("/user", (req, res) => {
  res.send("Data Saved successfully!");
});
app.delete("/user", (req, res) => {
  res.send("Data Deleted successfully!");
});

app.listen(3000, () => {
  console.log("server running on port 3000!");
});
