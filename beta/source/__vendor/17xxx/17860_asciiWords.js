// Module ID: 17860
// Function ID: 17861
// Name: asciiWords
// Dependencies: []

// Module 17860 (asciiWords)
const re0 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

export default function asciiWords(str) {
  const tmp = str.match(re0) || [];
  return tmp;
};
