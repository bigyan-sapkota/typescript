// OBJECTS AND ARRAYS -----------------------------------------------------

const person: {
  name: string;
  age: number;
} = {
  name: "Bigyan",
  age: 21,
};

const person2 = {
  name: "Bigyan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: any[];
favoriteActivities = ["Sports", 1];

console.log(person.name);

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); !ERROR
}
