const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));

// ===== User Service =====
app.use("/api/users", createProxyMiddleware({
  target: process.env.USER_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { "^/api/users": "" }  // strip prefix before forwarding
}));

// ===== Service Catalog =====
app.use("/api/services", createProxyMiddleware({
  target: process.env.SERVICE_CATALOG_URL,
  changeOrigin: true,
  pathRewrite: { "^/api/services": "" }
}));

// ===== Booking Service =====
app.use("/api/bookings", createProxyMiddleware({
  target: process.env.BOOKING_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { "^/api/bookings": "" }
}));

// ===== Payment Service =====
app.use("/api/payments", createProxyMiddleware({
  target: process.env.PAYMENT_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: { "^/api/payments": "" }
}));

// // ===== Notification Service =====
// app.use("/api/notifications", createProxyMiddleware({
//   target: process.env.NOTIFICATION_SERVICE_URL,
//   changeOrigin: true,
//   pathRewrite: { "^/api/notifications": "" }
// }));

// Proxy to Notification Service
app.use("/api/notifications", createProxyMiddleware({
  target: process.env.NOTIFICATION_SERVICE_URL, // http://localhost:5005
  changeOrigin: true,
  pathRewrite: { "^/api/notifications": "" }
}));

// Health check
app.get("/", (req, res) => {
  res.send("API Gateway is running 🚀");
});

const PORT = process.env.PORT || 5000; // fallback for local dev
app.listen(process.env.PORT, () => {
  console.log(`API Gateway running on port ${process.env.PORT}`);
});
