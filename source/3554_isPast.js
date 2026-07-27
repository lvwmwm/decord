// Module ID: 3554
// Function ID: 27677
// Name: isPast
// Dependencies: [3210, 3211]
// Exports: default

// Module 3554 (isPast)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isPast(defaultResult1) {
  requiredArgs.default(1, arguments);
  const time = _typeof.default(defaultResult1).getTime();
  return time < Date.now();
};
export default exports.default;
