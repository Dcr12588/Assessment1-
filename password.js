let password = `IchigoisGoat99%`

let minChars = false
let numCheck = false
let letterCheck = false
let upperCase = false
let specialChars = false

// Check if password length is greater than 10
if (password.length > 10){
    minChars = true
}
// Check if password has a letter
if(/[a-zA-Z]/.test(password)){
console.log('found a letter')
letterCheck = true
}
// Check is password has a number
if(/[\d]/.test(password)){
    console.log('found a number')
    numCheck = true
    }
// Check is password has an upper case letter
 if(/[A-Z]/.test(password)){
    console.log('found an upper case')
     upperCase = true
 }
// Check if password has a special character
 if(/[@#$%&*]/.test(password)){
    console.log('found a special character')
     specialChars = true
 }
// Checks if all variables are true or false
if(minChars && numCheck && letterCheck && upperCase && specialChars){
    console.log('This is a success');
} else {
    console.log('This is NOT a success');
}
