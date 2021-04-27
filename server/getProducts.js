const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    const filteredProducts = products.filter(
      (product) => product.price >= +req.query.price
    );

    return res.status(200).send(filteredProducts);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
