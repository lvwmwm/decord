// Module ID: 3510
// Function ID: 26965
// Name: isFuture
// Dependencies: [3210, 3211]
// Exports: default

// Module 3510 (isFuture)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFuture(defaultResult1) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  return time > Date.now();
};
export default exports.default;
