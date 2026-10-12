// Module ID: 1294
// Function ID: 1295
// Name: version
// Dependencies: [1283]
// Exports: default

// Module 1294 (version)
import validateDefault from "validate" /* 1283 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
