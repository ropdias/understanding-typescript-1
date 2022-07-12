// const person: {
//   name: string;
//   age: number;
// } = {
// You can assign like the above lines but TypeScript can infer the type
// So it's a better practice to just write like that:
const person = {
  name: "Maximilian",
  age: 30,
};

console.log(person.name);
