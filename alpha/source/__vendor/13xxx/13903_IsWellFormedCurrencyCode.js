// Module ID: 13903
// Function ID: 13904
// Name: IsWellFormedCurrencyCode
// Dependencies: []
// Exports: IsWellFormedCurrencyCode

// Module 13903 (IsWellFormedCurrencyCode)
const re0 = /[^A-Z]/;

export const IsWellFormedCurrencyCode = function IsWellFormedCurrencyCode(option) {
  const replaced = option.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  if (3 !== replaced.length) {
    return false;
  } else if (re0.test(replaced)) {
    return false;
  } else {
    return true;
  }
};
