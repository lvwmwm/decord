// Module ID: 18881
// Function ID: 18882
// Name: hasUnicodeWord
// Dependencies: []

// Module 18881 (hasUnicodeWord)
const re0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

export default function hasUnicodeWord(arg0) {
  return re0.test(arg0);
};
