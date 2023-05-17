const express = require('express');
const connectDB = require('./config/Database');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();


const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Error handling
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
});

const  PORT  = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));