// routes/products.js

const express = require('express');
const router = express.Router();

// Example: Get all products
router.get('/', (req, res) => {
    res.json({ message: 'Products API is working' });
});

module.exports = router;