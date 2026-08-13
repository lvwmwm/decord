// Module ID: 13557
// Function ID: 13558
// Name: __exportStarResult9
// Dependencies: []

// Module 13557 (__exportStarResult9)
arg5.IsWellFormedCurrencyCode = function IsWellFormedCurrencyCode(str) {
  const replaced = str.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  if (3 !== replaced.length) {
    return false;
  } else if (regex.test(replaced)) {
    return false;
  } else {
    return true;
  }
};
const re0 = /[^A-Z]/;
