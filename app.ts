function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

// When you specify a "void" return to a callback function you are 
// saying that you are not doing anything with the returned value from 
// that callback, that the function that is calling the callback does 
// not care about the return of the callback.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// This tells TypeScript that it should accept any function that takes two parameters
// where each parameter is a number and that function returns a number
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
  // return result; // You could return something here and TypeScript do not complain
  // because that addAndHandle function it's expecting void and does nothing with the 
  //return of the callback
});
