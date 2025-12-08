// const mongoose = require("mongoose");

// const notificationSchema = new mongoose.Schema({
//   to: { type: String, required: true },       // Recipient email/phone
//   subject: { type: String, required: true },  // Subject/title of the notification
//   text: { type: String, required: true },     // Message body
//   status: {                                   // Whether sending was successful
//     type: String,
//     enum: ["pending", "sent", "failed"],
//     default: "pending"
//   },
//   user: {                                     // (Optional) Link to user who triggered notification
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Notification", notificationSchema);

const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  to: { type: String, required: true },
  subject: { type: String, required: true },
  text: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "sent", "failed"],
    default: "pending"
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
