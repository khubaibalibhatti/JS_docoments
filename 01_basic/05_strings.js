
const name = "khubaib"
const repoCount = 40

// console.log(name + repoCount +  " value");

console.log(`Hello my name is ${name} and my repo count is
     ${repoCount}`);

     const idName = new String('alikhubaib-bhatti-com')

     //console.log(idName.length);
     //console.log(idName.__proto__);
     //console.log(idName.toLocaleUpperCase());

     console.log(idName.charAt(3));
     console.log(idName.indexOf('k'));


     const newString = idName.substring(0,4)
     console.log(newString);
     
const anotherString = idName.slice(-10,4)
console.log(anotherString);


const url = "https://khubaib.com/ali%20Bhatti"

console.log(url.replace('%20', '-'));

console.log(idName.split('-'));


const contentString = "Hello, world";
let index = 5;
console.log(contentString.at(index));
