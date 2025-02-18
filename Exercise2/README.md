# Client Side Programming - JavaScript Basics

This JavaScript program demonstrates basic concepts like variables, constants, arrays, objects, and type operations.

## Author

- Name: Aaron Hirtle
- Date: 2025-01-22
- Course: Client Side Programming PROG2700
- Exercise: #2

## Code Explanation

The program is divided into four parts:

### 1. **Variables and Constants**
   - Declares a `let` variable for the user's age and a `const` for their height.
   - Displays the values of these variables in the console.

### 2. **Arrays**
   - Creates an array `petNames` containing pet names.
   - Demonstrates modifying the array by adding, removing, and reversing items.

### 3. **Objects**
   - Creates three car objects with properties like `Make`, `Model`, `Year`, and `Color`.
   - Shows how to update properties and add new properties to an object.

### 4. **Type Operations**
   - Performs string operations like slicing a string and finding its length and index of a character.
   - Performs array operations like slicing an array and checking the index and length of an array.

## How to Run

1. Save the code in a file named `js_basics.js`.
2. Open a terminal or command prompt.
3. Navigate to the directory containing the file.
4. Run the script using Node.js:
   ```
   node js_basics.js
   ```
   Alternatively, you can open the file in a web browser's developer console.

## Example Output

```
--- Part 1 ---
User's Age: 39
User's Height: 5.11
--- Part 2 ---
Pet Names: [ 'Deadmouse', 'Sueco', 'TechN9ne' ]
Add Jim: [ 'Deadmouse', 'Sueco', 'TechN9ne', 'Jim' ]
Remove Jim: [ 'Deadmouse', 'Sueco', 'TechN9ne' ]
Reversed Pet Names: [ 'TechN9ne', 'Sueco', 'Deadmouse' ]
--- Part 3 ---
{ Make: 'Rivian', Model: 'R1S', Year: 2024 }
Updated Car 1: { Make: 'Rivian', Model: 'R1S', Year: 2025, color: 'Blue' }
Car 2: { Make: 'Tesla', Model: 'Model X', Year: 2023, Color: 'Red' }
Car 3: { Make: 'Ford', Model: 'Mustang Mach-E', Year: 2025, Color: 'Black' }
--- Part 4 ---
Sliced String: WE
Index of 'R' in String: 3
Length of String: 6
Sliced Array: [ 10, 15, 20 ]
Index of 3 in Array: -1
Length of Array: 5
```

## Description

This program introduces several basic JavaScript concepts, demonstrating how to declare and modify variables, work with arrays and objects, and perform common string and array operations.
```
