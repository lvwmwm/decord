// Module ID: 3504
// Function ID: 26938
// Name: isBefore
// Dependencies: [3209, 3210]
// Exports: default

// Module 3504 (isBefore)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isBefore(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = defaultResult1.getTime();
  return time < _typeof.default(defaultResult1).getTime();
};
export default exports.default;
