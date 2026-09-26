// Module ID: 17487
// Function ID: 17488
// Name: asciiWords
// Dependencies: []

// Module 17487 (asciiWords)
const re0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

export default function asciiWords(str) {
  return str.match(re0) || [];
};
