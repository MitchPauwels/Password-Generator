// Password Arrays
const symbolArray = ['!','”','#','$','%','&','(',')','*','+','-']
const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const alphabetUpper = alphabetLower.map(element => { return element.toUpperCase()})
const numbersArray = [1,2,3,4,5,6,7,8,9,0]
const fullArray = symbolArray.concat(alphabetLower, alphabetUpper,numbersArray)
let newPassword = ''

// Dark/ Light Toggle Mode
function toggleBackground() {
  let toggle = document.querySelector('main');
  toggle.classList.toggle("light-mode");
}

// Selected Input Elements
const inputElFirstPassword = document.querySelector('.first-password')
const inputElSecondPassword = document.querySelector('.second-password')
const inputElThirdPassword = document.querySelector('.third-password')
const inputElFourthPassword = document.querySelector('.fourth-password')


// Select range and input[number] element
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

// Listening to input event that will trigger syncCharacterAmount funtion
characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

// Sync range with number input/value
function syncCharacterAmount (sync) {
  const value = sync.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}

// Copy Input value Function
function copyToClipboard(element) {
  /* Get the text field */
  let copyText = element;
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
}

// Checkbox options for arrays that user wish to use
const symbolCheck = document.getElementById('symbol')
const alphabetLowerCheck = document.getElementById('alphabet-lower')
const alphabetUpperCheck = document.getElementById('alphabet-upper')
const numbersCheck = document.getElementById('numbers')
const fullArrayCheck = document.getElementById('full-array')

// Generate new passwords based on the Array provided
function generateRandomPassword(arr){

  for (let i = 0; i < characterAmountNumber.value ; i++) {
    arr.sort(() => Math.random() - 0.5)
    newPassword += arr[i]    
  }
  return newPassword 
}


// On-click calls the generateRandomPassword function that provides the generated passwords into the insert fields.
function callGeneratedPassword() {

if (symbolCheck.checked === true ) {

    inputElFirstPassword.value = generateRandomPassword(symbolArray) 
    newPassword = ''
    inputElSecondPassword.value = generateRandomPassword(symbolArray)
    newPassword = '' 
    inputElThirdPassword.value = generateRandomPassword(symbolArray)
    newPassword = '' 
    inputElFourthPassword.value = generateRandomPassword(symbolArray)
    newPassword = '' 
  } else if (alphabetLowerCheck.checked === true){
    inputElFirstPassword.value = generateRandomPassword(alphabetLower) 
    newPassword = ''
    inputElSecondPassword.value = generateRandomPassword(alphabetLower)
    newPassword = '' 
    inputElThirdPassword.value = generateRandomPassword(alphabetLower)
    newPassword = '' 
    inputElFourthPassword.value = generateRandomPassword(alphabetLower)
    newPassword = '' 
  } else if (alphabetUpperCheck.checked === true){
    inputElFirstPassword.value = generateRandomPassword(alphabetUpper) 
    newPassword = ''
    inputElSecondPassword.value = generateRandomPassword(alphabetUpper)
    newPassword = '' 
    inputElThirdPassword.value = generateRandomPassword(alphabetUpper)
    newPassword = '' 
    inputElFourthPassword.value = generateRandomPassword(alphabetUpper)
    newPassword = '' 
  } else if (numbersCheck.checked === true){
    inputElFirstPassword.value = generateRandomPassword(numbersArray) 
    newPassword = ''
    inputElSecondPassword.value = generateRandomPassword(numbersArray)
    newPassword = '' 
    inputElThirdPassword.value = generateRandomPassword(numbersArray)
    newPassword = '' 
    inputElFourthPassword.value = generateRandomPassword(numbersArray)
    newPassword = ''  
  }else {
    inputElFirstPassword.value = generateRandomPassword(fullArray) 
    newPassword = ''
    inputElSecondPassword.value = generateRandomPassword(fullArray)
    newPassword = '' 
    inputElThirdPassword.value = generateRandomPassword(fullArray)
    newPassword = '' 
    inputElFourthPassword.value = generateRandomPassword(fullArray)
    newPassword = ''  

  }
}









