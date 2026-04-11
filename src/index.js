require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // 1. Import the connection function

const app = express();
const PORT = process.env.PORT || 3000;

// 2. Call the connection function to establish a connection
connectDB();


// Import middleware from central file
const { errorHandler, requestLogger } = require('./middleware');

// Global middleware
console.log("CORS allowed origin:", process.env.FRONTEND_URL);
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(requestLogger);

// Routes
const mainRouter = require('./routes');
app.use('/api/v1', mainRouter);

// Error handler LAST
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
