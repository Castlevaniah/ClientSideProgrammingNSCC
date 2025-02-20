student_name = Nadia;
studentAge == "20";
isEnrolled = True; 

document.write("<h2>Student Info</h2>")
document.write("Name: " + studentName + <br>); 
document.write("Age: " + student_age); 
document.write("Enrolled: " + isEnrolled) 

let ageString = String(studentAge)
document.write("Age Type: " typeof ageString); 

num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
total = num1 + num2; 

document.write("Sum: " + total)

userAge = prompt("Enter your age");
if (userAge = 18) { 
    document.write("You can vote!"); 
} else (userAge < 18) { 
    document.write("Sorry, you can't vote."); 
}

for (i = 1; i < 10; i++) 
    document.write(i)

while num < 10 
    num = prompt("Enter a number greater than 10")
