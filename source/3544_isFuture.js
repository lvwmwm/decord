// Module ID: 3544
// Function ID: 27067
// Name: isFuture
// Dependencies: [3244, 3245]
// Exports: default

// Module 3544 (isFuture)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFuture(defaultResult1) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  return time > Date.now();
};
export default exports.default;
