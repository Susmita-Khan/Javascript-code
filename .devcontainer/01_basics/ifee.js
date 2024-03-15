// (function chai(){
//    console.log('DB CONNECTED');
// })(); two ifee can be ritten with semicolon ; in the end of ist ifee
// IFEE is needed to remove the pollution of global scope.

// (() => {
 //   console.log('DB CONNECTED TWO');
// })()

((name) => {
    console.log('DB CONNECTED TWO ${name}');
})('hitesh')
