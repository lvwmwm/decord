// Module ID: 1282
// Function ID: 1283
// Name: version
// Dependencies: [1271]
// Exports: default

// Module 1282 (version)
import validateDefault from "validate" /* 1271 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
