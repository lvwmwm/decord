// Module ID: 1293
// Function ID: 1294
// Name: version
// Dependencies: [1282]
// Exports: default

// Module 1293 (version)
import validateDefault from "validate" /* 1282 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
