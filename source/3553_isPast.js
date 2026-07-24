// Module ID: 3553
// Function ID: 27665
// Name: isPast
// Dependencies: [3209, 3210]
// Exports: default

// Module 3553 (isPast)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isPast(defaultResult1) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  return time < Date.now();
};
export default exports.default;
