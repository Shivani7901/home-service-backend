// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const morgan = require("morgan");

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(morgan("dev"));

// // Routes
// const notificationRoutes = require("./routes/notificationRoutes");
// // app.use("/api/notifications", notificationRoutes);
// app.use("/", notificationRoutes);

// const PORT = process.env.PORT || 5005;
// app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("Notification DB connected"))
//   .catch(err => console.error(err));
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const notificationRoutes = require("./routes/notificationRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Mount routes at root for proxy forwarding
app.use("/", notificationRoutes);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Notification DB connected"))
  .catch(err => console.error(err));
