// Module ID: 3461
// Function ID: 26783
// Name: eachWeekendOfYear
// Dependencies: [3458, 3462, 3463, 3245]
// Exports: default

// Module 3461 (eachWeekendOfYear)
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
