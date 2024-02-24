let products = [
    { name: 'Product A', sizes: ["XXL", "XL", "LG", "MD", "SM", "XS"],
     price: 10, cat: "summer", countInStock: 5, onSale: false },
    { name: 'Product B', sizes: ["XL", "SM", "XS"], 
    price: 20, cat: "winter", countInStock: 2, onSale: false },
    { name: 'Product C', sizes: ["XXL", "MD", "XS"], 
    price: 300, cat: "summer", countInStock: 20, onSale: false },
    { name: 'Product D', sizes: ["XXL", "XL", "MD", "XS"], 
    price: 40, cat: "winter", countInStock: 50, onSale: false },
    { name: 'Product E', sizes: ["XXL", "XL", "LG", "MD", "SM", "XS"],
     price: 100, cat: "summer", countInStock: 7, onSale: false },
    { name: 'Product F', sizes: ["XXL", "XL", "LG", "XS"],
     price: 200, cat: "winter", countInStock: 12, onSale: false },
    { name: 'Product G', sizes: ["XXL", "XS"], 
    price: 90, cat: "winter", countInStock: 18, onSale: false },
    { name: 'Product H', sizes: ["XL", "MD", "XS"], 
    price: 80, cat: "winter", countInStock: 5, onSale: false },
  ];
  
  // Scenario 1: Place summer items on sale
for (let i = 0; i < products.length; i++) {
    if (products[i].cat === 'summer') {
      products[i].onSale = true;
    }
  }
  console.log('Summer items on sale:', products.filter(product => product.cat === 'summer'));
  
  
// Scenario 2: If the price of products is more than 100, add FLAT Discount 20%
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 100) {
      products[i].price *= 0.8;
      console.log('Discounted product - ' + products[i].name + ', New Price: ' + products[i].price);
    }
  }
  
  
// Scenario 3: Find the products having category winter and increase their prices by 10%
for (let i = 0; i < products.length; i++) {
    if (products[i].cat === 'winter') {
      products[i].price *= 1.1;
      console.log('Winter product with increased price - ' + products[i].name + ', New Price: ' + products[i].price);
    }
  }
  
  
  // Scenario 4: Print the total amount of all stocks and total CountInStock
  let totalStockAmount = 0;
  let totalCountInStock = 0;
  for (let i = 0; i < products.length; i++) {
    totalStockAmount += products[i].price * products[i].countInStock;
    totalCountInStock += products[i].countInStock;
  }
  console.log('Total Stock Amount:', totalStockAmount);
  console.log('Total CountInStock:', totalCountInStock);
  
  // Scenario 5: If stock is less than 5 (few items left in stock)
  for (let i = 0; i < products.length; i++) {
    if (products[i].countInStock < 5) {
      console.log('Few items left in stock for ' + products[i].name);
    }
  }
  
  // Scenario 6: If stock of any product reaches zero, show a message
  for (let i = 0; i < products.length; i++) {
    if (products[i].countInStock === 0) {
      console.log('Sorry' + products[i].name + ' is out of stock');
    }
  }
  
  // Scenario 7: Print the number of sizes available against each product
  for (let i = 0; i < products.length; i++) {
    console.log('Available size(s) ' + products[i].name + ' ' + products[i].sizes.length + ' size(s)');
  }
  
// Scenario 8: Print all products available in "SM" sizes
console.log('Products available in "SM" sizes:');
for (let i = 0; i < products.length; i++) {
  let product = products[i];
  if (product.sizes.includes('SM')) {
    console.log(product);
  }
}

  // Scenario 9: If a product has fewer than 2 sizes available in stock, add a discount of 12%
  for (let i = 0; i < products.length; i++) {
    if (products[i].sizes.length < 2 && products[i].countInStock > 0) {
      products[i].price *= 0.88;
      console.log(products[i].name + ' has a 12% discount for only two hours left to purchase');
    }
  }
  


  