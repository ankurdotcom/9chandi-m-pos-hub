// server.js (Entry point)

const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Sequelize models
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');
const productRoutes = require('./routes/products');
const paymentRoutes = require('./routes/payments');
const categoryRoutes = require('./routes/categories');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/payments', paymentRoutes);
app.use('/categories', categoryRoutes);

// Sync DB & Start Server
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('POS system backend is running on port 3000');
    });
});
