// Password Arrays
const symbolArray = ['!','”','#','$','%','&','(',')','*','+','-']
const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const alphabetUpper = alphabetLower.map(element => element.toUpperCase())
const numbersArray = [1,2,3,4,5,6,7,8,9,0]
const fullArray = symbolArray.concat(alphabetLower, alphabetUpper,numbersArray)
// Selected Input Elements
const inputElFirstPassword = document.querySelector('.first-password')
const inputElSecondPassword = document.querySelector('.second-password')
const inputElThirdPassword = document.querySelector('.third-password')
const inputElFourthPassword = document.querySelector('.fourth-password')
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
function syncCharacterAmount (sync) {
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
function generateRandomPassword(arr){
  let newPassword = ''
  for (let i = 0; i < characterAmountNumber.value ; i++) {
    newPassword += arr[Math.floor(Math.random() * arr.length)]
  }
  return newPassword 
}
// Concat multiple arrays together.
function concatArrays(arr, arr2, arr3, arr4) {
  let newConcatArray = []
  newConcatArray = arr.concat(arr2, arr3, arr4)
  return newConcatArray
}

console.log(concatArrays(symbolArray, alphabetUpper))

// On-click calls the generateRandomPassword function that provides the generated passwords into the insert fields.
function callGeneratedPassword() {
  let newArray = []
  if ((symbolCheck.checked)&& 
      (!alphabetLowerCheck.checked) && 
      (!alphabetUpperCheck.checked) && 
      (!numbersCheck.checked)){
    newArray = generateRandomPassword(symbolArray)

      } else if ((!symbolCheck.checked)&& 
      (alphabetLowerCheck.checked) && 
      (!alphabetUpperCheck.checked) && 
      (!numbersCheck.checked)){
    newArray = generateRandomPassword(alphabetLower)

      } else if ((!symbolCheck.checked)&& 
      (!alphabetLowerCheck.checked) && 
      (alphabetUpperCheck.checked) && 
      (!numbersCheck.checked)){
    newArray = generateRandomPassword(alphabetUpper)

      } else if ((!symbolCheck.checked)&& 
      (!alphabetLowerCheck.checked) && 
      (!alphabetUpperCheck.checked) && 
      (numbersCheck.checked)){
    newArray = generateRandomPassword(numbersArray)
      }else {
        newArray = generateRandomPassword(fullArray)
      }

  for (password of passwordElements) {
    password.innerHTML = generateRandomPassword(newArray)

  }
  }










