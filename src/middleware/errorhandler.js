// Centralized Error Handler
const errorHandler = (err, req, res, next) => {
  const id = req.params.id;
  res.status(500).json({
    error: `The user with ID ${id} could not be found.`
  });
};

module.exports = errorHandler;
