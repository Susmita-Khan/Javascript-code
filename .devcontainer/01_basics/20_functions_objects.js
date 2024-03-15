function CalculateCartPrice(...num1) {   // by giving ...before the parameter in the func name we can pass multiple values to that function in the form of array 
    return num1
}
console.log(CalculateCartPrice(200, 400, 500))


function CalculateCartPrice(val1, val2, ...num1) {     // here val1, val2 etc val will take the ist values and it will not get printed only the num1 values inside the array will get printed. 
    return num1
}
console.log(CalculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    prices: 399
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
handleObject({
    username: "sam",
    price: 400
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));

