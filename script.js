// Array to hold book data (you can later replace this with a database or API)
let books = [
    { title: "Book 1", author: "Author 1", price: 10 },
    { title: "Book 2", author: "Author 2", price: 15 },
    { title: "Book 3", author: "Author 3", price: 20 },
];

// Function to render the list of books
function renderBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ''; // Clear previous content

    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>$${book.price}</p>
            <button onclick="buyBook('${book.title}')">Buy</button>
        `;
        bookList.appendChild(bookItem);
    });
}

// Function to handle buying a book (for simplicity, just log it)
function buyBook(title) {
    alert(`You bought: ${title}`);
}

// Handle the book addition form submission
const form = document.getElementById("add-book-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const price = document.getElementById("book-price").value;

    // Add new book to the array
    books.push({ title, author, price: parseFloat(price) });

    // Clear form
    form.reset();

    // Re-render the book list
    renderBooks();
});

// Initial rendering of books
renderBooks();
