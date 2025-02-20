let studentName = "Nadia";  // ERROR: Use 'studentName' and quotes around "Nadia"
let studentAge = 20;  // ERROR: Use '=' for assignment, not '=='
let isEnrolled = true;  // ERROR: Use 'true' (lowercase)

document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + "<br>");  // ERROR: Missing quotes around <br>
document.write("Age: " + studentAge);  // ERROR: Use 'studentAge' instead of 'student_age'
document.write("Enrolled: " + isEnrolled);

let ageString = String(studentAge);
document.write("Age Type: " + typeof ageString);  // ERROR: Missing '+' for concatenation

let num1 = parseInt(prompt("Enter first number"));  // ERROR: Use 'parseInt()' or 'parseFloat()' to convert to numbers
let num2 = parseInt(prompt("Enter second number"));  // ERROR: Use 'parseInt()' or 'parseFloat()' to convert to numbers
let total = num1 + num2;

document.write("Sum: " + total);

let userAge = parseInt(prompt("Enter your age"));
if (userAge === 18) {  // ERROR: Use '===' for comparison, not '='
    document.write("You can vote!"); 
} else if (userAge < 18) {  // ERROR: Incorrect syntax, use 'else if (userAge < 18)'
    document.write("Sorry, you can't vote."); 
}

for (let i = 1; i < 10; i++) {  // ERROR: Missing curly braces for the loop body
    document.write(i);
}

let num = 0;  // ERROR: Missing initialization of 'num'
while (num < 10) {  // ERROR: Missing parentheses around condition
    num = parseInt(prompt("Enter a number greater than 10"));
}
