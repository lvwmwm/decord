// Module ID: 3577
// Function ID: 27737
// Name: isWednesday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3577 (isWednesday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 3 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
