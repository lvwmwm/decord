// Module ID: 3507
// Function ID: 26946
// Name: isFirstDayOfMonth
// Dependencies: [3209, 3210]
// Exports: default

// Module 3507 (isFirstDayOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFirstDayOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(defaultResult1).getDate();
};
export default exports.default;
