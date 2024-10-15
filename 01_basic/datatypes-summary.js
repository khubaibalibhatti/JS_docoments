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

let myObj= {
    name:"khubaib",
    age:"17"
}

const myFunction = function(){
    console.log("hello word");
    
}