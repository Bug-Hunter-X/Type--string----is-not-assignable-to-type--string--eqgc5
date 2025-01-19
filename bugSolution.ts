function greeter(person: string): string {
  return `Hello, ${person}!`;
}

function greeterArray(person: string[]): string {
  return `Hello, ${person.join(' ')}!`;
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //Correct

let user2 = "Jane Doe";
console.log(greeter(user2));//Correct