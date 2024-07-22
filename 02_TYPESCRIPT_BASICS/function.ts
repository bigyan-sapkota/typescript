function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Use void if there is no return
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// --------------FUNCTION AS TYPE-----------------------------------------

// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number;
combinedValues = add;

// combinedValues = printResult;
// combinedValues = 5; !Gives error when combinedValues is of Function type

console.log(combinedValues(8, 8));

//--------------FUNCTION TYPE AND CALLBACK-------------------------------
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
