// Module ID: 1296
// Function ID: 1297
// Name: version
// Dependencies: [1285]
// Exports: default

// Module 1296 (version)
import validateDefault from "validate" /* 1285 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
