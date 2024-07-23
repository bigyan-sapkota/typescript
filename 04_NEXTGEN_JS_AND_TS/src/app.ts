// Code goes here!
const userName = "Bigyan";

let age = 30;
age = 29;

const printOutput: (a: number | string) => void = (output) => {
  console.log(output);
};

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}

printOutput(5 + 2);

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const add = (...numbers: [number, number, number, number]) => {
  let result = 0;
  result = numbers.reduce((acc, curr) => acc + curr, 0);
  return result;
};

const addedNumbers = add(5, 20, 2, 3.5);
console.log(addedNumbers);
