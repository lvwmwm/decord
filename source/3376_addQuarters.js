// Module ID: 3376
// Function ID: 26518
// Name: addQuarters
// Dependencies: [3214, 3359, 3211]
// Exports: default

// Module 3376 (addQuarters)
import toInteger from "toInteger";
import addMonths from "addMonths";
import requiredArgs from "requiredArgs";


export default function addQuarters(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(defaultResult1, 3 * toInteger.default(defaultResult1));
};
export default exports.default;
