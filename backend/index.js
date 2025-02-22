const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { ClerkExpressWithAuth } = require("@clerk/clerk-sdk-node");
const snippetRoutes = require('./routes/snippetRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(ClerkExpressWithAuth());
app.use("/api/snippets", snippetRoutes);


app.get("/", (req, res) => {
    res.send("API is running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));