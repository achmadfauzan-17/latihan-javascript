// function sayHello(person)

// //return value
// function findAngka(x ,y){
//     return x*y;
// }

// //arrow function
// function sayHello(person){
//     console.log("Hello");
// }

// const sayHello =(person)

// function printHeart() {
//   console.log("<3");
// }
// printHeart();

// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(2, 3));
// console.log(multiply(9, 9));
// console.log(multiply(5, 4));

// let animal = "Giant Pasific Octopus";
// function observe() {
//   let animal = "Pajama Squid";
//   console.log(animal);
// }
// observe();

//arrow function
// const sayHello = (person) => `Hello ${person}!`;

// console.log(sayHello("Nico"));
// console.log(sayHello("Dicky"));
// console.log(sayHello("David"));

function setTime() {
  const header = document.getElementById("header");
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log("Program Finish");
