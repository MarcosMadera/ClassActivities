// Challenge 1: String Manipulation Basics
// Write a function that takes a string as input and returns the string in uppercase.

//function toUpperCaseString(input) {
// return input.toUpperCase();
//}
//Find both indices of the word "fox" in the sentence "The quick brown fox jumps over the lazy fox."

const sentence = "The quick brown fox jumps over the lazy fox.";
const search = "fox";
const indexOfFirst = sentence.indexOf(search);
console.log(`${indexOfFirst}`);
console.log(sentence.indexOf(search, indexOfFirst + 1));

//  Combine ["apple", "banana"] and ["cherry", "date"] into a single array, and join the array into a string separated by commas.
