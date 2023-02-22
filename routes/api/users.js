const express = require("express");
const router = express.Router();
const User = require("../../models/User");

//ROUTES      POST /api/users
//@desc       Stores the form data in mongoDB

router.post("/", async (req, res) => {
  // Extract the data from the request body
  const { name, email, phone, message } = req.body;

  // Create a new data object and save it to the database
  const newUser = new User({ name, email, phone, message });
  try {
    await newUser.save();
    res.send("Data stored successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error storing data");
  }
});

module.exports = router;
