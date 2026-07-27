// Module ID: 3508
// Function ID: 26959
// Name: isFirstDayOfMonth
// Dependencies: [3210, 3211]
// Exports: default

// Module 3508 (isFirstDayOfMonth)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFirstDayOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 1 === _typeof.default(defaultResult1).getDate();
};
export default exports.default;
