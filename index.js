const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON requests

// First Middleware
app.use((req, res, next) => {
    console.log("It is Middleware 1");
    next();
});

// GET Request
app.get("/", (req, res) => {
    console.log("GET request received for /");
    res.status(200).send("Hello World!");
});

// POST Request
app.post("/login", (req, res) => {
    console.log("POST Request Received");
    console.log("Headers:", req.headers);
    res.status(200).send("Login Successful");
});

// PUT Request - Update user data
app.put("/update-user", (req, res) => {
    console.log("PUT Request Received");
    res.send("User updated successfully");
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});