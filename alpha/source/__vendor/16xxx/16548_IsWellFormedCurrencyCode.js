// Module ID: 16548
// Function ID: 16549
// Name: IsWellFormedCurrencyCode
// Dependencies: []
// Exports: IsWellFormedCurrencyCode

// Module 16548 (IsWellFormedCurrencyCode)
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
