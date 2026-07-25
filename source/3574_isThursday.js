// Module ID: 3574
// Function ID: 27736
// Name: isThursday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3574 (isThursday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 4 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
