/* const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
} */

/*const myObject = {     For-of loop is used for objects
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple",
} 
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
} */

/* const programming = ["js","rb","py","java","cpp"]  For-in loop used for arrays 
for (const key in programming) {
    console.log(programming[key]);
} */



 /*const map = new map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
} */



/* const coding = ["js","ruby","Java","Python","Cpp"]  using foreach syntax 
coding.forEach( function (val){
    console.log(val);
} ) */
    
/* const coding = ["js","ruby","Java","Python","Cpp"]    using arrow function in foreach
coding.forEach( (item) => {
   // console.log(item);
})
function printMe(item) {
  //  console.log(item);
}
coding.forEach(printMe)

coding.forEach((item,index,arr)=> {     here we are using foreach usng arrow function
    console.log(item,index,arr);
}) */



 /*const myCoding = [ {          here we are declaring array inside that declaring object, inside object accesing value of an object.
    languageName: "javascript",
    languageFileName: "js",
},
   {
    languageName: "java",
    languageFileName: "java",
   } ,
   {
    languageName: "python",
    languageFileName: "py",
   },

]
myCoding.forEach((item)=> {
    console.log(item.languageFileName);
}) */