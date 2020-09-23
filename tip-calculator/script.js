const billInput = document.querySelector('#input-bill');
const tipInput = document.querySelector('#input-tip');
const peopleInput = document.querySelector('#input-people');
const displayTip = document.querySelector('#display-tip');
const displayTotal = document.querySelector('#display-total');

// will calculate the tip and total amounts to be paid by each person
function calculateTip() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);
  const peopleValue = parseFloat(peopleInput.value);

  const tipAmount = billValue * tipValue / 100 / peopleValue;
  const total = (billValue + tipAmount) / peopleValue;

  displayTip.innerHTML = tipAmount.toFixed(2);
  displayTotal.innerHTML = total.toFixed(2);
}

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);
