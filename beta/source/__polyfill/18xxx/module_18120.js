// Module ID: 18120
// Function ID: 18121
// Dependencies: []

// Module 18120
const re0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

export default function hasUnicodeWord(arg0) {
  return re0.test(arg0);
};
