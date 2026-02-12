require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Import middleware from central file
const { errorHandler, requestLogger } = require('./middleware');

// Global middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
const mainRouter = require('./routes');
app.use('/api/v1', mainRouter);

// Error handler LAST
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
