// TUPLES - they have same length and same data type
const person: {
  name: string;
  age: number;
  hobbies?: string[];
  role: [number, string];
} = {
  name: "a",
  age: 1,
  role: [2, "author"],
};

// per son.role.push("admin");
// person.role[1] = 10;

person.role = [0, "admin"];
console.log(person.role);
