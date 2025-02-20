student_name = Nadia;  // ERROR: Use 'studentName' and quotes around "Nadia"
studentAge == "20";  // ERROR: Use '=' for assignment, not '=='
isEnrolled = True;  // ERROR: Use 'true' (lowercase)

document.write("<h2>Student Info</h2>");
document.write("Name: " + studentName + <br>);  // ERROR: Missing quotes around br
document.write("Age: " + student_age);  // ERROR: Use 'studentAge' instead of 'student_age'
document.write("Enrolled: " + isEnrolled); 

let ageString = String(studentAge);
document.write("Age Type: " typeof ageString);  // ERROR: Missing '+' for concatenation

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
total = num1 + num2;  // ERROR: Use 'parseInt()' or 'parseFloat()' to convert to numbers

document.write("Sum: " + total);

userAge = prompt("Enter your age");
if (userAge = 18) {  // ERROR: Use '===' for comparison, not '='
    document.write("You can vote!"); 
} else (userAge < 18) {  // ERROR: Incorrect syntax, use 'else if (userAge < 18)'
    document.write("Sorry, you can't vote."); 
}

for (i = 1; i < 10; i++)  // ERROR: Missing curly braces for the loop body
    document.write(i);

while num < 10  // ERROR: Missing parentheses around condition
    num = prompt("Enter a number greater than 10");
