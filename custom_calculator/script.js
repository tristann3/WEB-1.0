const feetInput = document.querySelector('#input-feet');
const inchesInput = document.querySelector('#input-inches');
const weightInput = document.querySelector('#input-weight');
const displayBMI = document.querySelector('#display-BMI');

// will calculate the tip and total amounts to be paid by each person
function calculateBMI() {
  const feetValue = parseFloat(feetInput.value);
  const inchesValue = parseFloat(inchesInput.value);
  const weightValue = parseFloat(weightInput.value);

  const totalInches = (feetValue * 12) + inchesValue;

  const BMI = (weightValue / (totalInches ** 2)) * 703;

  displayBMI.innerHTML = BMI.toFixed(2);
}

feetInput.addEventListener('input', calculateBMI);
inchesInput.addEventListener('input', calculateBMI);
weightInput.addEventListener('input', calculateBMI);
