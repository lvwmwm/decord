// Module ID: 20257
// Function ID: 20258
// Name: hasUnicode
// Dependencies: []

// Module 20257 (hasUnicode)
const regex = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

export default function hasUnicode(arg0) {
  return regex.test(arg0);
};
