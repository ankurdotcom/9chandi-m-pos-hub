
// routes/orders.js

const express = require('express');
const { Order, OrderItem, Product } = require('../models');

const { generateOTP, generateQRCode } = require('../utils/token');
// Use the generateOTP and generateQRCode functions in your order routes

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    const { customerId, items } = req.body;

    try {
        let totalAmount = 0;
        const order = await Order.create({
            customerId,
            status: 'placed',
            otp: generateOTP(),  // Generate OTP for the order
            qr_code: generateQRCode() // Generate QR code URL or string
        });

        for (let item of items) {
            const product = await Product.findByPk(item.productId);
            const orderItem = await OrderItem.create({
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                price: product.price * item.quantity
            });
            totalAmount += orderItem.price;
        }

        // Update order total amount
        order.totalAmount = totalAmount;
        await order.save();

        res.json({ message: 'Order created successfully', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve an order by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByPk(id, {
            include: [{ model: OrderItem, include: [Product] }]
        });
        if (!order) return res.status(404).json({ error: 'Order not found' });

        res.json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
