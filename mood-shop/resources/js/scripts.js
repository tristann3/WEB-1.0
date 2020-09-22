/* eslint-disable arrow-parens */
/* eslint-disable camelcase */
/* eslint-disable radix */
/* eslint-disable no-shadow */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
// eslint-disable-next-line import/extensions
import data from './data.js';

const itemsContainer = document.getElementById('items');
const itemList = document.getElementById('item-list');
const cartQty = document.getElementById('cart-qty');
const cartTotal = document.getElementById('cart-total');

itemList.innerHTML = '<li></li>';

data.forEach((item) => {
  const newDiv = document.createElement('div');
  newDiv.className = 'item';

  const img = document.createElement('img');
  img.src = item.image;
  img.width = 300;
  img.height = 300;

  // Add the image to the div
  newDiv.appendChild(img);

  const desc = document.createElement('p');
  desc.innerText = item.desc;
  newDiv.appendChild(desc);

  const price = document.createElement('p');
  price.innerText = item.price;
  newDiv.appendChild(price);

  // creates buy button with a custom attribute data-price
  const button = document.createElement('button');
  button.id = item.name;
  button.dataset.price = item.price;
  button.innerHTML = 'Add to Cart';
  newDiv.appendChild(button);

  itemsContainer.appendChild(newDiv); // puts newly created div inside the items container
});
const all_items_button = Array.from(document.querySelectorAll('button'));

all_items_button.forEach(elt => elt.addEventListener('click', () => {
  addItem(elt.getAttribute('id'), elt.getAttribute('data-price'));
  showItems();
}));
const cart = [];
// ---------------------------------------------------------------
// handle clicks on list
itemList.onclick = function (e) {
  console.log(e.target);
  if (e.target && e.target.classList.contains('remove')) {
    const name = e.target.dataset.name; // data-name="????"
    removeItem(name);
  }
  if (e.target && e.target.classList.contains('add')) {
    const name = e.target.dataset.name; // data-name="????"
    const price = e.target.dataset.price;
    addItem(name, price);
  }
  if (e.target && e.target.classList.contains('subtract')) {
    const name = e.target.dataset.name; // data-name="????"
    removeItem(name, 1);
  }
};
// ---------------------------------------------------------------
// Handle change events on update input
itemList.onchange = function (e) {
  if (e.target && e.target.classList.contains('update')) {
    const name = e.target.dataset.name;
    const qty = parseInt(e.target.value);
    updateCart(name, qty);
  }
};

// ----------------------------------------------------------------
// Add Item
function addItem(name, price) {
  // looks for items in the cart with same name and adds qty instead of another new item
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty++;
      showItems();
      return;
    }
  }
  // if there is not another item in the cart with the same name, it adds a new item
  const item = { name, price, qty: 1 };
  cart.push(item);
}

// ---------------------------------------------------------------
// Show Items
function showItems() {
  // defines two variables the recieve the quantity and total returned from each function
  const total = getTotal();
  const qty = getQty();

  cartQty.innerHTML = `You have ${qty} items in your cart`;

  let itemStr = '';

  // builds string to be logged with name, price, quantity of each different item
  for (let i = 0; i < cart.length; i++) {
    const { name } = cart[i];
    const { price } = cart[i];
    const { qty } = cart[i];

    itemStr += `<li>${name} $${price} x ${qty} = $${price * qty} 
    <button class="remove" data-name="${name}">Remove</button>
    <button class="add" data-name=${name}>+</button>
    <button class="subtract" data-name=${name}>-</button>
    <input class="update" data-name=${name} type="number" min="0">
    </li>`;
  }

  itemList.innerHTML = itemStr;
  cartTotal.innerHTML = `Total in cart: $${total.toFixed(2)}`;
}

// -------------------------------------------------------------
// Get Quantity
function getQty() {
  let qty = 0;
  // loops through cart to get total number of items AND total price
  for (let i = 0; i < cart.length; i++) {
    qty += cart[i].qty;
  }
  return qty;
}

// ------------------------------------------------------------
// Get Total
function getTotal() {
  let total = 0;
  // loops through cart to get total price
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }
  return total;
}

// -------------------------------------------------------
// Get Total
function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      if (qty > 0) {
        cart[i].qty -= qty;
      }
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1);
      }
      showItems();
      return;
    }
  }
}
// --------------------------------------------------------
// Update Cart
function updateCart(name, qty) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty = qty;
      if (cart[i].qty < 1) {
        removeItem(cart[i].name);
        return;
      }
      showItems();
      return;
    }
  }
}

// ---------------------------------------------------------
// addItem('Apple', 0.99);
// addItem('Apple', 0.99);
// addItem('Orange', 0.99);
// addItem('Apple', 0.99);
// removeItem('Apple', 1);
// removeItem('Orange');

// showItems();
