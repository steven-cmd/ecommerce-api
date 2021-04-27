const express = require("express");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");

const app = express();

const port = 3030;

app.get("/api/products", getProducts);
app.get("/api/products/:id", getProduct);

app.listen(port, () => {
  console.log("it's working! port:" + port);
});
