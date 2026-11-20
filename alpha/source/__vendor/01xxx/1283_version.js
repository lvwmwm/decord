// Module ID: 1283
// Function ID: 1284
// Name: version
// Dependencies: [1272]
// Exports: default

// Module 1283 (version)
import validateDefault from "validate" /* 1272 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
