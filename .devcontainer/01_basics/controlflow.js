// var is globally accessed so var is not used for declaring the variables.It will be accesed outside the scope that will create the problem. 
const score = 200
if (score > 100){
    let power = "fly"
//    console.log('User power: ${power}'); 
}
// console.log('User power: ${power}'); 

const UserLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (UserLoggedIn && debitCard && 2==3) {
  //  console.log("Allow to buy course");
}
if (LoggedInFromGoogle || LoggedInFromEmail ) {
   // console.log("user logged in");
}

/* const month = 3
switch (month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("Mar");
        break;
    case 4 :
        console.log("April");
        break;

        default:
            console.log("default case matched");
            break;
 } */

const month = "April"
switch (month) {
    case "Jan" :
        console.log("January");
        break;
    case "Feb" :
        console.log("February");
        break;
    case "Mar" :
        console.log("Mar");
        break;
    case "Apr" :
        console.log("April");
        break;

        default:
            console.log("default case matched");
            break;
} 




