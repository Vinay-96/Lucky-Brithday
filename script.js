const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputText = document.querySelector('#output-box');

function compareValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputText.innerText = "your birthday is lucky..!";
  }
  else {
    outputText.innerText = "Not that lucky.";
  }
}

function checkBirthdayIsLucky() {

  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) {
    compareValue(sum, luckyNumber.value)
  }
  else {
    outputText.innerText = "Please enter the valid DOB & luckyNumber";
  }

}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum += Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener('click', checkBirthdayIsLucky);

