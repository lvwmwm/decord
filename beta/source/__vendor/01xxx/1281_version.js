// Module ID: 1281
// Function ID: 1282
// Name: version
// Dependencies: [1270]
// Exports: default

// Module 1281 (version)
import validateDefault from "validate" /* 1270 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
