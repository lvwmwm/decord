// Module ID: 1284
// Function ID: 1285
// Name: version
// Dependencies: [1273]
// Exports: default

// Module 1284 (version)
import validateDefault from "validate" /* 1273 */;


export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
