// Select range and input[number] element
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
// Checkbox options for arrays that user wish to use
const symbolCheck = document.getElementById('symbol')
const alphabetLowerCheck = document.getElementById('alphabet-lower')
const alphabetUpperCheck = document.getElementById('alphabet-upper')
const numbersCheck = document.getElementById('numbers')
const fullArrayCheck = document.getElementById('full-array')
// Dark/ Light Toggle Mode
function toggleBackground() {
  let toggle = document.querySelector('main');
  toggle.classList.toggle("light-mode");
}
// Selected Input Elements
const passwordElements = document.querySelectorAll('.input-el')
// Listening to input event that will trigger syncCharacterAmount funtion
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)
// Sync range with number input/value
function syncCharacterAmount(sync) {
  const value = sync.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}
//copyText from Element
function copyToClipboard(element) {

  const elementText = element.textContent; //get the text content from the element
  copyText(elementText); //use the copyText function below
}
//Copied text into clipbaord
function copyText(text) {
  navigator.clipboard.writeText(text);
}
// Generate new passwords based on the Array provided
function generateRandomPassword(arr) {
  let newPassword = ''
  for (let i = 0; i < characterAmountNumber.value; i++) {
    newPassword += arr[Math.floor(Math.random() * arr.length)]
  }
  return newPassword
}
// On-click calls the generateRandomPassword function that provides the generated passwords into the insert fields.
function callGeneratedPassword() {
  // Password Arrays
  const symbolArray = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', '-']
  const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const alphabetUpper = alphabetLower.map(element => element.toUpperCase())
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let newArray = []

  if (symbolCheck.checked) {
    newArray = newArray.concat(symbolArray)
  }
  if (alphabetLowerCheck.checked) {
    newArray = newArray.concat(alphabetLower)
  }
  if (alphabetUpperCheck.checked) {
    newArray = newArray.concat(alphabetUpper)
  }
  if (numbersCheck.checked) {
    newArray = newArray.concat(numbersArray)
  }

  if (newArray.length) {
    for (password of passwordElements) {
      password.innerHTML = generateRandomPassword(newArray)
    }
  }
}