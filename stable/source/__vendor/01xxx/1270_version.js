// Module ID: 1270
// Function ID: 1271
// Name: version
// Dependencies: [1259]
// Exports: default

// Module 1270 (version)
import validateDefault from "validate" /* 1259 */;

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
