const express = require('express');
const app = express();
const PORT = 3000;

// Define a basic route that sends text to the browser
app.get('/', (req, res) => {
    res.send('Hello, we are finished cicd cource');
});

// Start the server and listen on port 3000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});