// Module ID: 3552
// Function ID: 27662
// Name: isMonday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3552 (isMonday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
