const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// POST /api/payments
router.post("/", auth, async (req, res) => {
  try {
    const { amount, currency } = req.body;

    // Stripe works in smallest unit (paise if INR, cents if USD)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // e.g. ₹500 => 50000 paise
      currency: currency || "inr",
      metadata: { userId: req.user.id },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      message: "Payment initiated",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

