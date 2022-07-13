// const person: {
//   name: string;
//   age: number;
// } = {
// You can assign like the above lines but TypeScript can infer the type
// So it's a better practice to just write like that:
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};

// person.role.push('admin'); // Tuple type can't catch this error
// person.role[1] = 10; // Tuple type can catch this error
// person.role = [0, 'admin', 'user']; // Tuple type can catch this error

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
