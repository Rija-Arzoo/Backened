// backend/server.js
const express = require("express");
const app = express();
const PORT = 5000;

// middleware to handle JSON
app.use(express.json());

// route
app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

// example API
app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Rija" },
        { id: 2, name: "Ali" }
    ]);
});

// start server
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
