// Module ID: 3409
// Function ID: 26627
// Name: isLastDayOfMonth
// Dependencies: [3210, 3410, 3411, 3211]
// Exports: default

// Module 3409 (isLastDayOfMonth)
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
