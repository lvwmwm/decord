// Module ID: 16047
// Function ID: 16048
// Name: IsWellFormedCurrencyCode
// Dependencies: []
// Exports: IsWellFormedCurrencyCode

// Module 16047 (IsWellFormedCurrencyCode)
const re0 = /[^A-Z]/;

export function IsWellFormedCurrencyCode(option) {
  const replaced = option.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  if (3 !== replaced.length) {
    return false;
  } else if (re0.test(replaced)) {
    return false;
  } else {
    return true;
  }
}
