// Module ID: 3509
// Function ID: 26952
// Name: isFuture
// Dependencies: [3209, 3210]
// Exports: default

// Module 3509 (isFuture)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFuture(defaultResult1) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  return time > Date.now();
};
export default exports.default;
