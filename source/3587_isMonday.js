// Module ID: 3587
// Function ID: 27776
// Name: isMonday
// Dependencies: [3244, 3245]
// Exports: default

// Module 3587 (isMonday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
