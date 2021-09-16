const express = require("express");

require("dotenv").config();
require("./config/db")();
const app = express(),
  cookieParser = require("cookie-parser"),
  cors = require("cors"),
  path = require("path"),
  authRouter = require("./routes/auth"),
  msgRouter = require("./routes/messages"),
  userRouter = require("./routes/user");

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/msgs", msgRouter);
app.get("/", (req, res) => {
  console.log("Une nouvelle requête");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
