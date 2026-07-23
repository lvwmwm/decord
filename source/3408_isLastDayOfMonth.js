// Module ID: 3408
// Function ID: 26614
// Name: isLastDayOfMonth
// Dependencies: [3209, 3409, 3410, 3210]
// Exports: default

// Module 3408 (isLastDayOfMonth)
import _typeof from "_typeof";
import endOfDay from "endOfDay";
import endOfMonth from "endOfMonth";
import requiredArgs from "requiredArgs";


export default function isLastDayOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const time = endOfDay.default(defaultResult1).getTime();
  const defaultResult2 = endOfDay.default(defaultResult1);
  return time === endOfMonth.default(defaultResult1).getTime();
};
export default exports.default;
