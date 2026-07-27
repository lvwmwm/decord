// Module ID: 3578
// Function ID: 27749
// Name: isWednesday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3578 (isWednesday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 3 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
