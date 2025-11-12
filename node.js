import express from "express";
const app = express();
app.use(express.json());

let partData = {};

app.post("/update", (req, res) => {
  partData = req.body;
  console.log("受信:", partData);
  res.send("OK");
});

app.get("/get", (req, res) => {
  res.json(partData);
});

app.listen(3000, () => console.log("サーバー起動: http://localhost:3000"));
