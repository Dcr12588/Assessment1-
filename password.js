let password = `IchigoisGoat42`

let minChars = false

for (let i=0; i < password.length; i++){
    console.log(password[i])
}

if (password.length >= 10){
    minChars = true
}

console.log(minChars)