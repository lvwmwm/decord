// Module ID: 13035
// Function ID: 99284
// Name: IsWellFormedCurrencyCode
// Dependencies: []

// Module 13035 (IsWellFormedCurrencyCode)
arg5.IsWellFormedCurrencyCode = function IsWellFormedCurrencyCode(arg0) {
  const arr = function toUpperCase(str) {
    return str.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  }(arg0);
  if (3 !== arr.length) {
    return false;
  } else if (regex.test(arr)) {
    return false;
  } else {
    return true;
  }
};
let closure_0 = /[^A-Z]/;
