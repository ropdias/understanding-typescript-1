// const person: {
//   name: string;
//   age: number;
// } = {
// You can assign like the above lines but TypeScript can infer the type
// So it's a better practice to just write like that:
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, REALY_ONLY, AUTHOR};
// You can also start a enum with a different value than 0:
// enum Role {ADMIN = 5, REALY_ONLY, AUTHOR};
// Or different values to all identifies:
// enum Role {ADMIN = 5, REALY_ONLY = 50, AUTHOR = 100};
// And you are not restricted to numbers:
// enum Role {ADMIN = 'ADMIN', REALY_ONLY = 50, AUTHOR = 100};

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

// person.role.push('admin'); // Tuple type can't catch this error
// person.role[1] = 10; // Tuple type can catch this error
// person.role = [0, 'admin', 'user']; // Tuple type can catch this error

// let favoriteActivities: any[]; AVOID any types whenever you can
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log('is author');
}