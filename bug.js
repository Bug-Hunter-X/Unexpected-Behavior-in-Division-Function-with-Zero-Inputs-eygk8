function foo(a,b){    if (a === 0 || b === 0) {        return 0;    }    return a / b;}

console.log(foo(10,0)); //outputs Infinity
console.log(foo(0,10)); //outputs 0
console.log(foo(0,0));  //outputs 0