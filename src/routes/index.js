const express = require('express');
const router = express.Router();

// Import resource-specific routers
const usersRouter = require('./users.routes.js');
const postRouter = require('./posts.routes.js');

// Mount routers
router.use('/users', usersRouter);
router.use('/posts', postRouter);

module.exports = router;

//documentation cnahges



// require('dotenv').config();
// const express = require("express");
// const app = express();

// // parse JSON bodies
// app.use(express.json());

// // Import middleware
// const errorHandler = require('../middleware/errorhandler');
// const requestLogger = require('../middleware/requestlogger');
// app.use(requestLogger);

// const postsRouter = require("./posts.routes");
// const usersRouter = require("./users.routes");

// // Mock function to simulate user lookup
// const findUserById = async (id) => {
//   // Simulate a database lookup
//   if (id === "error") {
//     throw new Error("User not found");
//   }
//   return { id, name: `User ${id}`, email: `user${id}@example.com` };
// };

// app.get("/", (req, res) => {
//   res.send("Blogify API is running!");
// });

// app.use("/api/v1/posts", postsRouter);
// app.use('/', usersRouter);

// // Part 1: User Route
// app.get("/api/v1/users/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const user = await findUserById(id);
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// });

// // Part 2: Apply Centralized Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 3000;
// if (require.main === module) {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }

// module.exports = app;