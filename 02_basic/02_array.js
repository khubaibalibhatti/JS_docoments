const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fastfood = ["burgure","pizza","shwarma"];

// fruits.push(fastfood)


// fruits.pop(fastfood)
// console.log(fruits);


// const allcategory = fruits.concat(fastfood)
// console.log(allcategory);

const all_new_category = [...fruits,...fastfood];

// console.log(all_new_category);


const  another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

// console.log(Array.isArray("khubaib"));
// console.log(Array.from("khubaib"));


let name = "khubaib"
let email = "ali@demo.com"
let age = 17

// console.log(Array.of(name,email,age));

