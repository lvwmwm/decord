// Module ID: 17464
// Function ID: 17465
// Dependencies: []

// Module 17464
const regex = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

export default function hasUnicode(arg0) {
  return regex.test(arg0);
};
