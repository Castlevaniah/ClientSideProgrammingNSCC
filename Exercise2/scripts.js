/*
 * ===========================================================
 * Name        : Aaron Hirtle
 * Date        : 2025-01-22
 * Course      : Client Side Programming PROG2700
 * Exercise    : #2
 * ===========================================================
 */

// Part 1: Variables and Constants
console.log("--- Part 1 ---");
let userAge = 39;  // User's age
const userHeight = 5.11;  // User's height

console.log("User's Age:", userAge);
console.log("User's Height:", userHeight);

// Part 2: Arrays
console.log("--- Part 2 ---");
let petNames = ['Deadmouse', 'Sueco', 'TechN9ne'];  // List of pet names
console.log("Pet Names:", petNames);

// Modify pet names array
petNames.push('Jim');  // Add a new pet
console.log("Add Jim:", petNames);
petNames.pop();  // Remove last pet
console.log("Remove Jim:", petNames);
petNames.reverse();  // Reverse the array
console.log("Reversed Pet Names:", petNames);

// Part 3: Objects
console.log("--- Part 3 ---");
let car1 = { Make: 'Rivian', Model: 'R1S', Year: 2024 };  // Car 1 object
console.log(car1);
car1.year = 2025;  // Update year
car1.color = 'Blue';  // Add color
console.log("Updated Car 1:", car1);

let car2 = { Make: 'Tesla', Model: 'Model X', Year: 2023, Color: 'Red' };  // Car 2 object
let car3 = { Make: 'Ford', Model: 'Mustang Mach-E', Year: 2025, Color: 'Black' };  // Car 3 object

console.log("Car 2:", car2);
console.log("Car 3:", car3);

// Part 4: Type Operations
console.log("--- Part 4 ---");
let str = "QWERTY";
let slicedStr = str.slice(2, 5);  // Extract substring
console.log("Sliced String:", slicedStr);
console.log("Index of 'R' in String:", str.indexOf('R'));
console.log("Length of String:", str.length);

let numbers = [5, 10, 15, 20, 25];  // List of numbers
let slicedArray = numbers.slice(1, 4);  // Slice part of the array
console.log("Sliced Array:", slicedArray);
console.log("Index of 3 in Array:", numbers.indexOf(3));
console.log("Length of Array:", numbers.length);
