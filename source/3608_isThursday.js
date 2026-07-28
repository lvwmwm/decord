// Module ID: 3608
// Function ID: 27839
// Name: isThursday
// Dependencies: [3244, 3245]
// Exports: default

// Module 3608 (isThursday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isThursday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 4 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
