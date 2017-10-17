var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * 100 + 1);
  var itemObject = { [itemName]: itemPrice };
  cart.push(itemObject);
  console.log(itemName + ` has been added to your cart.`);
  return cart;
 }


function viewCart() {
  if (!cart.length) {
    return console.log("Your shopping cart is empty.")
  }
    const itemsWithPrices = [];

    for (let i = 0; i < cart.length; i++) {
      var itemNames = Object.keys(cart[i]);
      var itemName = itemNames[0];
      var itemPrice = cart[i][itemName]

      itemsWithPrices.push(`${itemName} at $${itemPrice}`)
    }

    if (itemsWithPrices.length === 1) {
      return console.log(`In your cart, you have ${itemsWithPrices.join()}.`)
    } else if (itemsWithPrices.length === 2) {
      return console.log(`In your cart, you have ${itemsWithPrices[0]} and ${itemsWithPrices.slice(-1)}.`)
    } else {
      return console.log(`In your cart, you have ${itemsWithPrices.slice(0,-1).join(', ')}, and ${itemsWithPrices.slice(-1)}.`)
    }

  }


    function total() {
      var totalPrice = [];
      for (var i = 0; i < cart.length; i++) {
        var cartObject = cart[i];
        var itemName = Object.keys(cartObject)[0];
        var itemPrice = cartObject[itemName];
        totalPrice.push(itemPrice);
      }
      var currentTotal = totalPrice.reduce(function(a, b) {
        return a + b;
      }, 0);
      return currentTotal;
    }

function removeFromCart(item) {
  return [item, ...cart]
}

function placeOrder(cardNumber) {
  // write your code here
}
