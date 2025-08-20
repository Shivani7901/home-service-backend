const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({
      service: req.body.service,
      date: req.body.date,
      time: req.body.time,
      user: req.user.id   // 👈 attach logged-in user
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
