const billInput = document.querySelector('#input-bill');
const tipInput = document.querySelector('#input-tip');
const peopleInput = document.querySelector('#input-people');
const tipDisplay = document.querySelector('#display-tip');
const totalDisplay = document.querySelector('#display-total');

let tipAmount = 0;

function calculateTotal(billValue, peopleValue) {
  let totalAmount = 0;
  if (peopleValue < 1) {
    totalAmount = parseFloat(billValue) + parseFloat(tipAmount);
  } else if (peopleValue > 0) {
    totalAmount = (parseFloat(billValue) + parseFloat(tipAmount)) / peopleValue;
    console.log(totalAmount)
  }

  totalDisplay.innerHTML = totalAmount;
}

function calculateTip() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const peopleValue = peopleInput.value;

  console.log(peopleValue);
  if (peopleValue < 1) {
    tipAmount = (billValue * tipValue / 100);
  } else if (peopleValue > 0) {
    tipAmount = ((billValue * tipValue / 100) / peopleValue);
  }

  tipDisplay.innerHTML = tipAmount.toFixed(2);
  calculateTotal(billValue, peopleValue);
}

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);