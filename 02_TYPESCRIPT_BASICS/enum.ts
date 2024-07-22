// Good practice but harder
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// This makes READ_ONLY 6 and AUTHOR 7
// enum Role {
//   ADMIN = 5,
//   READ_ONLY,
//   AUTHOR,
// }

// You can also assign string
// enum Role{
//     ADMIN = 500,
//     READ_ONLY = "read",
//     AUTHOR = 7
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Bigyan",
  age: 21,
  hobbies: ["Coding", "Pubg"],
  role: Role.ADMIN,
};

if ((person.role = Role.AUTHOR)) {
  console.log("is author");
}
