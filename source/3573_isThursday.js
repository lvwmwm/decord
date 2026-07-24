// Module ID: 3573
// Function ID: 27725
// Name: isThursday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3573 (isThursday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 4 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
