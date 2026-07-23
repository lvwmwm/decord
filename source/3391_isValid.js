// Module ID: 3391
// Function ID: 26560
// Name: isValid
// Dependencies: [3392, 3209, 3210]
// Exports: default

// Module 3391 (isValid)
import _typeof from "_typeof";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isValid(defaultResult1) {
  requiredArgs.default(1, arguments);
  if (!_typeof.default(defaultResult1)) {
    if ("number" !== typeof defaultResult1) {
      return false;
    }
  }
  return !isNaN(Number(_typeof.default(defaultResult1)));
};
export default exports.default;
