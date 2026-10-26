// Module ID: 19186
// Function ID: 19187
// Name: hasUnicodeWord
// Dependencies: []

// Module 19186 (hasUnicodeWord)
const re0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

export default function hasUnicodeWord(arg0) {
  return re0.test(arg0);
};
