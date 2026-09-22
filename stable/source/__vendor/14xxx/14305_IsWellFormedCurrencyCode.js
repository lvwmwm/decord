// Module ID: 14305
// Function ID: 14306
// Name: IsWellFormedCurrencyCode
// Dependencies: []
// Exports: IsWellFormedCurrencyCode

// Module 14305 (IsWellFormedCurrencyCode)
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
