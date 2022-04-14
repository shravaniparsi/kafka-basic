var books = [
  { BookID: "1", Title: "Book 1", Author: "Author 1" },
  { BookID: "2", Title: "Book 2", Author: "Author 2" },
  { BookID: "3", Title: "Book 3", Author: "Author 3" },
];

function handle_request(msg) {
  books.push(msg);
  return books;
}

exports.handle_request = handle_request;
