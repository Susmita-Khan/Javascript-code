// primitive
// 7 types: string,number,boolean,null,undefined,symbol,BigInt
// Reference (Non primitive)
// Array,objects,functions
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // Symbol datatype
// const bigNumber = 3456897123568794566667889n // BigInt datatype
const heros = ["shaktiman", "naagraj", "doga"]; // datatype is functions
let myobj = {   // datatype is functions
    name: "hitesh",
    age: 22,
}
const myFunction = function(){   // return type is object function
    console.log("Hello world");
}

console.log(typeof bigNumber);