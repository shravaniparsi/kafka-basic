const rpc = new (require("./kafkarpc"))();
// const kafka = require("./kafka/client");

const addBook = (req, res) => {
  rpc.makeRequest("post_book", req.body, (err, results) => {
    if (err) {
      res.json({
        status: "error",
        msg: "System Error, Try Again.",
      });
    } else {
      res.json({
        updatedList: results,
      });
      res.end();
    }
  });
};

module.exports = {
  addBook,
};
