// Classes

// Step 1 - Product class
const product = {
  id: 1,
  title: "...",
  price: 0,
  description: "...",
  image: "...",
};

// Step 2 - Product Item
const productItem = {
  product: {}, // instance of Product class
  addToCart() {
    // just console.log the product for now
  },
  render() {
    // return the product element with the product data (<li>)
  },
};

// Step 3 - Product List
const productList = {
  products: [],
  fetchProducts: function () {
    // fetch the products from the API
  },
  render() {
    // render the products by looping through the products array and create a new ProductItem instance for each product. Use render method of ProductItem class to get each product element and append it to the `<ul>`.
  },
};