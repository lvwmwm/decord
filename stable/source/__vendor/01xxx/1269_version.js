// Module ID: 1269
// Function ID: 1270
// Name: version
// Dependencies: [1258]
// Exports: default

// Module 1269 (version)
import validateDefault from "validate" /* 1258 */;

importDefault = arg2;
const dependencyMap = arg6;

export default function version(arr) {
  if (validateDefault(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
