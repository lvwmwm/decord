// Module ID: 3426
// Function ID: 26675
// Name: isValid
// Dependencies: [3427, 3244, 3245]
// Exports: default

// Module 3426 (isValid)
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
