// Module ID: 3378
// Function ID: 26514
// Name: addYears
// Dependencies: [3213, 3358, 3210]
// Exports: default

// Module 3378 (addYears)
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";


export default function addYears(interval, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(interval, 12 * toInteger.default(defaultResult1));
};
export default exports.default;
