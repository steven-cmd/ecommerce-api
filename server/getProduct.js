const products = require("../products.json");

const getProduct = (req, res) => {
  let product = products.find((val) => val.id === parseInt(req.params.id));
  product ? res.status(200).send(product) : res.status(500).send("not found");
};

module.exports = getProduct;
