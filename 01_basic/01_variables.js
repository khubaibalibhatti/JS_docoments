const accountId =  223311
let accountEmail = "ali@demo.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;


// accountId = 2 // not allowed



accountEmail = "sahmi@gmail.com"
accountPassword = "098823"
accountCity = "islamabad" 

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountState, accountId, accountEmail, accountPassword, accountCity])
