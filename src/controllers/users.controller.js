const { validationResult } = require('express-validator');

const registerUser = (req, res) => {
  // 2. Run the validation check
  const errors = validationResult(req);
  
  // 3. If there are errors, send a 400 Bad Request response
  if (!errors.isEmpty()) {
    // 400 Bad Request is the correct status code for a client-side validation error
    return res.status(400).json({ errors: errors.array() });
  }

  // If we reach this point, the data is valid!
  // We can now proceed with creating the user.
  const { email, password } = req.body;
  
  // ... logic to save user to database ...

  res.status(201).json({ message: 'User registered successfully' });
};

module.exports = {
  registerUser,
};