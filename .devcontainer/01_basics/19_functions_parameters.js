// function definition inside the curly braces
function sayMyName() { 
     console.log("H");
     console.log("I");
}

sayMyName()   //sayMyName is a reference and as soon as the parenthesis starts it became its execution


function addTwoNumbers(number1,number2) {  // inside func def (num1,num2) is called func parameters
     //    console.log(number1+number2);    
} 
addTwoNumbers(3,null) // func name is addTwoNumbers and passing value to the func i.e.(3,null) its called as arguments


function addTwoNumbers(numbers1,numbers2)  {
   let result = number1 + number2 // here we have to define the variabble result and need to pass the parameter
   console.log("Hitesh"); //
   return result // after return we can't print anything  // this result is declared inside the func name addTwoNumbers
   return number1+number2 // directly another alternate way to do of line 17. 
}
const result = addTwoNumbers(3,5) // here it will output as 8 // this result is declared outside the function
console.log("Result: ",result); //  but here result will show value as undefined because we have not declared the variable result in the func


function loginUserMessage(Username) {  // here username is a parameter for func loginUserMessage
     return `${Username} just logged in` //here username is used as a variable which will be returned.
}
console.log(loginUserMessage("hitesh")); // how to select parameter and pass value to that parameter.


function loginUserMessage(Username) {
     if(Username===undefined)  // we will check here whether the parameter username is declared or having any value or arguments
     {
     console.log("please enter a Username");
     return  // this return will execute and after this no return will execute
}
return `${Username} just logged in` // if return is declared inside the if condition and inside the func then this return in line 38 will not execute
}
console.log(loginUserMessage()); // it will return undefined.


function loginUserMessage(Username) {
     if(!Username)  // we will check here whether the parameter username is declared or having any value or arguments
     {
     console.log("please enter a Username");
     return  // this return will execute and after this no return will execute
}
return `${Username} just logged in` // if return is declared inside the if condition and inside the func then this return in line 38 will not execute
}
console.log(loginUserMessage()); // it will return undefined.


function loginUserMessage(Username="Sam") {  // it will make the value of the parameter as default
     if(!Username)  // we will check here whether the parameter username is declared or having any value or arguments
     {
     console.log("please enter a Username");
     return  // this return will execute and after this no return will execute
}
return `${Username} just logged in` // if return is declared inside the if condition and inside the func then this return in line 38 will not execute
}
console.log(loginUserMessage("hitesh")); // it will overide the value of the parameter as hitesh