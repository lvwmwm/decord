// Module ID: 20249
// Function ID: 20250
// Name: hasUnicodeWord
// Dependencies: []

// Module 20249 (hasUnicodeWord)
const re0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

export default function hasUnicodeWord(arg0) {
  return re0.test(arg0);
};
