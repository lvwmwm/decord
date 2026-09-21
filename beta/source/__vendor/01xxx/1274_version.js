// Module ID: 1274
// Function ID: 1275
// Name: version
// Dependencies: [1263]
// Exports: default

// Module 1274 (version)
import validateDefault from "validate" /* 1263 */;

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
