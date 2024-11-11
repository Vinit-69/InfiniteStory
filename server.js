// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');

// Initialize dotenv to load .env file
dotenv.config();

// Initialize the Express application
const app = express();
const port = 3000;  // You can change this port if needed

// Log the API key from the .env file to confirm it's loaded
const apiKey = process.env.GEMINI_API_KEY;
console.log("Gemini API Key: ", apiKey);

// Define a simple route to check if the server is running
app.get('/', (req, res) => {
    res.send('Welcome to InfiniteStory! Your server is running.');
});

// Add a route to interact with Gemini API (this is a placeholder)
app.get('/gemini', (req, res) => {
    // Replace this with the actual API call logic to Gemini or another API
    res.send(`Gemini API key is: ${apiKey}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
