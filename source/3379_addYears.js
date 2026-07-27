// Module ID: 3379
// Function ID: 26527
// Name: addYears
// Dependencies: [3214, 3359, 3211]
// Exports: default

// Module 3379 (addYears)
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";


export default function addYears(interval, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(interval, 12 * toInteger.default(defaultResult1));
};
export default exports.default;
