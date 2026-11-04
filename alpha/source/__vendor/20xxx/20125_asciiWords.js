// Module ID: 20125
// Function ID: 20126
// Name: asciiWords
// Dependencies: []

// Module 20125 (asciiWords)
const re0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

export default function asciiWords(str) {
  const tmp = str.match(re0) || [];
  return tmp;
};
