// Primitive

// 7 types : string, Number,Boolean,null,undefined,symbol
// BigInt//

const score = 200
const scoreValue = 200.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

// Reference (Non primitive)

//Array, Objects, Functions


const heros = ["aliansari", "Danish","feroz"]

// console.log(heros);


let myObj= {
    name:"khubaib",
    age:"17"
}
console.log(myObj);

const myFunction = function(){
    console.log("hello word");
    
}



// *******************************//

// stack=> (Primitive), heap=>(Non-Primitive)

let myinstaname = "ali_khubaib007"

let anothername = myinstaname
anothername = "Ahtasham"

console.log(myinstaname);
console.log(anothername);

let userOne = {
    name:"khubaib",
    email:"ali@demo.com"
}


let userTwo = userOne

userTwo.email = "sahmi123@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




