const express = require('express');
const app = express();
const PORT = 3000;

// Use JSON middleware
app.use(express.json());
app.use(express.static('public'));  // Serve static files like HTML, CSS, JS

// Sample data (can be replaced with a database)
let books = [
    { title: "Book 1", author: "Author 1", price: 10 },
    { title: "Book 2", author: "Author 2", price: 15 },
    { title: "Book 3", author: "Author 3", price: 20 },
];

// Route to get the list of books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Route to add a book
app.post('/api/add-book', (req, res) => {
    const { title, author, price } = req.body;
    books.push({ title, author, price });
    res.status(201).send('Book added!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
