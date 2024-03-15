//function chai() {
 //   let username ="hitesh"
  //  console.log(this.username);  this is doesn't work inside functions it only works inside objects.
// }
//chai()

//const chai = function() {
//    let username ="hitesh"
 //  console.log(this.username);  code doesn't runs as function is written  
//}
//chai()

// const chai = () => {
 //   let username ="hitesh"
 //  console.log(this.username);  // arrow function operates and the code runs with this 
// }
// chai()

// const chai = () => {
 //   let username ="hitesh"
 //  console.log(this);  It will return the {}
// }
// chai()

// const addTwo = (num1, num2) => {
 //   return num1 + num2
// }
// console.log(addTwo(3,4)) if using curly braces then we have to use return.

// const addTwo = (num1, num2) => (num1 + num2) if not using curly braces wrap it in a first bracket as (num1+num2) then we don't have to use return 
// console.log(addTwo(3,4))

const addTwo = (num1, num2) => ({username:"hitesh"})
console.log(addTwo(3,4))
