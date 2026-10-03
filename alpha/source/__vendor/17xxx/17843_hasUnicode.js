// Module ID: 17843
// Function ID: 17844
// Name: hasUnicode
// Dependencies: []

// Module 17843 (hasUnicode)
const regex = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");

export default function hasUnicode(arg0) {
  return regex.test(arg0);
};
