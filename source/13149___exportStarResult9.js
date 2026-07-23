// Module ID: 13149
// Function ID: 101440
// Name: __exportStarResult9
// Dependencies: []

// Module 13149 (__exportStarResult9)
arg5.IsWellFormedCurrencyCode = function IsWellFormedCurrencyCode(arg0) {
  const arr = (function toUpperCase(str) {
    return str.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  })(arg0);
  if (3 !== arr.length) {
    return false;
  } else if (regex.test(arr)) {
    return false;
  } else {
    return true;
  }
};
const re0 = /[^A-Z]/;
