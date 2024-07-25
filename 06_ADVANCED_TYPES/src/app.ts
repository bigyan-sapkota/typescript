// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin{}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "bigyan",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name : " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges : " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date : " + emp.startDate);
  }

  // WRONG:
  // if (typeof emp === "object") {
  //   console.log("Priveleges : " + emp.privileges);
  // }
}

printEmployeeInformation({ name: "Bigyan", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(amount: number) {
    console.log(`Loading ${amount} cargo`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving at speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 200 });

const paragraph = document.getElementById("message-output");
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")
// );

const userInputElement = <HTMLInputElement>(
  (document.getElementById("user-input") as HTMLInputElement)
);

if (userInputElement) {
  userInputElement.value = "hello";
}

interface ErrorContainer {
  // {email : "not a valid email",  username: "Must start with a character"}
  [prop: string]: string;
}

const errorBat: ErrorContainer = {
  email: "Not a valid email",
  username: "Must have at least a character",
};

// const result = add(1, 5) as number;
const userInput = "a";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
