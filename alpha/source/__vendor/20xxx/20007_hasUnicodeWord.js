// Module ID: 20007
// Function ID: 20008
// Name: hasUnicodeWord
// Dependencies: []

// Module 20007 (hasUnicodeWord)
const re0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

export default function hasUnicodeWord(arg0) {
  return re0.test(arg0);
};
