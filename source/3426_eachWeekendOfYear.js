// Module ID: 3426
// Function ID: 26668
// Name: eachWeekendOfYear
// Dependencies: [3423, 3427, 3428, 3210]
// Exports: default

// Module 3426 (eachWeekendOfYear)
import eachWeekendOfInterval from "eachWeekendOfInterval";
import endOfYear from "endOfYear";
import startOfYear from "startOfYear";
import requiredArgs from "requiredArgs";


export default function eachWeekendOfYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = startOfYear.default(defaultResult1);
  return eachWeekendOfInterval.default({ start: startOfYear.default(defaultResult1), end: endOfYear.default(defaultResult1) });
};
export default exports.default;
