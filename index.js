const http = require("http");

const quotes = [
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  }, {
    text: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon"
  }, {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart"
  }, {
    text: "How wonderful it is that nobody need wait a single moment before starting to improve the world",
    author: "Anne Frank"
  }
];

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.end(JSON.stringify(quote));
});

httpServer.listen(process.env.PORT || '3001');
