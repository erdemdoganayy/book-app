const express = require('express');
const bookRoutes = require('./routes/books');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Static files middleware

// In-memory storage for books
let books = [];

// Kök yolu için basit bir yanıt
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Routes
app.use('/api/books', bookRoutes(books));

app.listen(port, () => {
    console.log(`Books API running at http://localhost:${port}`);
});


app.get('/health', (req, res) => {
    res.status(200).send({ status: 'UP' });
});

