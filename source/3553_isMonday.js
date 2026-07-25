// Module ID: 3553
// Function ID: 27673
// Name: isMonday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3553 (isMonday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isMonday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
