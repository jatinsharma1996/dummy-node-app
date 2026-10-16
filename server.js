const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route - When someone opens the link in a browser
app.get('/', (req, res) => {
    res.send(`
        <div style="font-family: Arial; text-align: center; margin-top: 50px;">
            <h1>🚀 My Dummy Deployment Project</h1>
            <p>This project is running live successfully!</p>
            <h3 style="color: green;">Status: Active & Running</h3>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});