const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const serviceRoutes = require("./routes/serviceRoutes");
app.use("/api/services", serviceRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Service Catalog DB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Service Catalog running on port ${PORT}`));

