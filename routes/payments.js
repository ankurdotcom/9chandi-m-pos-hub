// routes/payments.js

const express = require('express');
const router = express.Router();

// Example: Get all payments
router.get('/', (req, res) => {
    res.json({ message: 'Payments API is working' });
});

module.exports = router;