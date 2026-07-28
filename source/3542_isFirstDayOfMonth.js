// Module ID: 3542
// Function ID: 27061
// Name: isFirstDayOfMonth
// Dependencies: [3244, 3245]
// Exports: default

// Module 3542 (isFirstDayOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFirstDayOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(defaultResult1).getDate();
};
export default exports.default;
