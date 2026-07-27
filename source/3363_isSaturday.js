// Module ID: 3363
// Function ID: 26480
// Name: isSaturday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3363 (isSaturday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSaturday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 6 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
