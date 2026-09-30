// Module ID: 17715
// Function ID: 17716
// Name: asciiWords
// Dependencies: []

// Module 17715 (asciiWords)
const re0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

export default function asciiWords(str) {
  return str.match(re0) || [];
};
