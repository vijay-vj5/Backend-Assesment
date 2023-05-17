const mongoose = require('mongoose');
// const { DB_URI } = process.env;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/MyData', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;