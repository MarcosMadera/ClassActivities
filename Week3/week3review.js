// Challenge: Create a function greet() that takes two parameters: firstName and lastName. The function should return a string that says, "Hello, [firstName] [lastName]!"
function greet(firstName, lastName) {
  return `Hello, ${firstName}, ${lastName}`;
}
//console.log{greet()"firstName", "lastName"};
//Write a function doubleNumber that takes a number and returns twice its value.

// Level 2

function doubleNumber(num) {
  return num * 2;
}
console.log(doubleNumber(2));

//Level 3
//Challenge: Write a function isPositive that returns true if a number is positive, and immediately returns false if the number is zero or negative.

function isPositive(num) {
  if (num <= 0) {
    return false;
  }
  return true;
}
console.log(isPositive(17));

// Level 4
 Challenge: Create an array colors containing three strings: "red", "green", and "blue". Log the second element to the console.

// Level 5
// Challenge: Create an array numbers containing the numbers 1 to 5. Log the last array item using .length to the console.
const numberArray =



// Level 6
 Challenge: Create an array of students containing two objects, each representing a student with properties name and age. Log the name of the first student.
 let students = [
  { name: "Alice", age: 14 },
  { name: "Bob", age: 15 }
];
console.log(students[0].name); // "Alice"



// Level 7
// Challenge: Create an array fruits containing "apple", "banana", and "cherry". Use a for...of loop to add each item to a new array.

// final Level!!!
const librarySystem = {
  branches: {
    mainBranch: {
      books: [
        {
          title: "1984",
          author: "George Orwell",
          publisher: "Secker & Warburg"
        },
        { title: "Brave New World", author: "Aldous Huxley" }
      ],
      manager: { name: "Alice Smith", email: "alice@library.com" }
    },
    westBranch: {
      books: [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Moby Dick", author: "Herman Melville" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger" },
        { title: "Crime and Punishment", author: "Fyodor Dostoevsky" }
      ],
      manager: { name: "Bob Johnson" }
    },
    eastBranch: {
      books: [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
        {
          title: "Harry Potter and the Sorcerer's Stone",
          author: "J.K. Rowling"
        },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "The Alchemist", author: "Paulo Coelho" }
      ],
      manager: { name: "Sarah Thompson", email: "sarah@library.com" }
    }
  },
  systemInfo: {
    establishedYear: 1985
  }
};

// Check if the manager of mainBranch has an email property

// Check if the first book in mainBranch has a publisher property

// Verify if systemInfo has the certification property

// Add a function listBooks to the librarySystem object.
// The function should take the name of a branch (mainBranch or westBranch or eastbranch)
// as an argument and log the titles of the books in that branch.
