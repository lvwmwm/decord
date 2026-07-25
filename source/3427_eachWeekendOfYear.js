// Module ID: 3427
// Function ID: 26680
// Name: eachWeekendOfYear
// Dependencies: [3424, 3428, 3429, 3211]
// Exports: default

// Module 3427 (eachWeekendOfYear)
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
