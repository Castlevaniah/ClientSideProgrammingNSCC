/*
 * ===========================================================
 * Name    : Aaron Hirtle
 * Date    : 2025-02-12
 * Course  : Client Side Programming
 * Assignment #1 JS Fundamentals
 * ===========================================================
*/


// Part 1: Variables, Data Types & Type Casting
let studentName = "Prince Vegeta";
let studentAge = 25;
let isEnrolled = true;

document.write("Student Name: " + studentName + "<br>");
document.write("Student Age: " + studentAge + " (" + typeof studentAge + ")<br>");
document.write("Enrolled: " + isEnrolled + "<br>");

typeof studentAge;
studentAge = String(studentAge);
document.write("Student Age after conversion: " + studentAge + " (" + typeof studentAge + ")<br><br>");

// Part 2: Operators & User Interaction
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

document.write("Addition: " + (num1 + num2) + "<br>");
document.write("Subtraction: " + (num1 - num2) + "<br>");
document.write("Multiplication: " + (num1 * num2) + "<br>");
document.write("Division: " + (num1 / num2) + "<br>");
document.write("Modulus: " + (num1 % num2) + "<br><br>");

// Part 3: Conditional Execution
let userAge = Number(prompt("Enter your age:"));
if (userAge >= 18) {
    document.write("You are eligible to vote!<br><br>");
} else {
    document.write("You are not eligible to vote yet.<br><br>");
}

// Part 4: Loops
document.write("Numbers from 1 to 10: <br>");
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}
document.write("<br><br>");

let userNumber;
do {
    userNumber = Number(prompt("Enter a number greater than 10:"));
} while (userNumber <= 10);

document.write("Valid number entered: " + userNumber);
