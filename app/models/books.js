const express = require('express');
const router = express.Router();

module.exports = (books) => {
  // Create a new book
  router.post('/', (req, res) => {
    const { title, author, year } = req.body;
    const book = { id: books.length + 1, title, author, year };
    books.push(book);
    res.status(201).send(book);
  });

  // Get all books
  router.get('/', (req, res) => {
    res.status(200).send(books);
  });

  // Update a book
  router.patch('/:id', (req, res) => {
    const { title, author, year } = req.body;
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send();

    book.title = title || book.title;
    book.author = author || book.author;
    book.year = year || book.year;
    res.send(book);
  });

  // Delete a book
  router.delete('/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send();

    const deletedBook = books.splice(bookIndex, 1);
    res.send(deletedBook);
  });

  return router;
};

