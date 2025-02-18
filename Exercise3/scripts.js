/*
 * ===========================================================
 * Name    : Aaron Hirtle
 * Date    : 2025-02-02
 * Course  : Client Side Programming
 * Exercise: #3
 * ===========================================================
*/

// Part 1: Arithmetic Operators
let num1 = 10;
let num2 = 20;

console.log("Addition result:", num1 + num2);
console.log("Subtraction result:", num1 - num2);
console.log("Multiplication result:", num1 * num2);
console.log("Division result:", num1 / num2);
console.log("Modulus result:", num1 % num2);
console.log("Power result:", num1 ** num2);

// Part 2: Comparison operators (>, <, >=, <=, ===, !==)
console.log("Is num1 greater than num2:", num1 > num2);
console.log("Is num1 less than num2:", num1 < num2);
console.log("Is num1 less than or equal to num2:", num1 <= num2);
console.log("Is num1 greater than or equal to num2:", num1 >= num2);
console.log("Is num1 the same type and value as num2:", num1 === num2);
console.log("Is num1 not equal to num2:", num1 !== num2);


// Part 3: Logical Operators
let isSunny = true;
let isWeekend = false;

console.log("Sunny AND Weekend?", isSunny && isWeekend);
console.log("Sunny OR Weekend?", isSunny || isWeekend);
console.log("Sunny?", !isSunny);

// Part 4: Assignment Operators
let score = 50;

score += 10; 
console.log("Updated score after += 10:", score);

score -= 5; 
console.log("Updated score after -= 5:", score);

score *= 2; 
console.log("Updated score after *= 2:", score);

// Part 5: User Interaction

alert("Greetings, Fellow Humans!");

if (confirm("Are you a Human?")) {
  let userName = prompt("What is your human name?");
  let userAge = prompt("How many human years are you?");
  
  if (!userName || !userAge) {
    alert("Alright. Keep your secrets.");
  } else {
    console.log("User's Name:", userName);
    console.log("User's Age:", userAge);
  }
} else {
  alert("You must be a bot!");
}

