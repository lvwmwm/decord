// Module ID: 3413
// Function ID: 26629
// Name: addYears
// Dependencies: [3248, 3393, 3245]
// Exports: default

// Module 3413 (addYears)
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";


export default function addYears(interval, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(interval, 12 * toInteger.default(defaultResult1));
};
export default exports.default;
