// Module ID: 15469
// Function ID: 15470
// Name: IsWellFormedCurrencyCode
// Dependencies: []
// Exports: IsWellFormedCurrencyCode

// Module 15469 (IsWellFormedCurrencyCode)
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
